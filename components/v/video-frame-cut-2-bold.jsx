import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg6_69hzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zg6_69hzv"/>`,
		"fallback": "solar:video-frame-cut-2-bold",
	});
}

export default Component;
