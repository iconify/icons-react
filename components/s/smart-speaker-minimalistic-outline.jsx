import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zop31pd3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zop31pd3u"/>`,
		"fallback": "solar:smart-speaker-minimalistic-outline",
	});
}

export default Component;
