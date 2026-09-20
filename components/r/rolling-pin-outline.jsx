import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4fbtxb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4fbtxb_x"/>`,
		"fallback": "solar:rolling-pin-outline",
	});
}

export default Component;
