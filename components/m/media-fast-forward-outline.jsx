import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbkny492m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbkny492m"/>`,
		"fallback": "typcn:media-fast-forward-outline",
	});
}

export default Component;
