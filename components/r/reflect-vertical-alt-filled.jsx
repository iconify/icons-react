import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne5zp8bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne5zp8bxn"/>`,
		"fallback": "boxicons:reflect-vertical-alt-filled",
	});
}

export default Component;
