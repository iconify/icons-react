import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joa8-ubia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="joa8-ubia"/>`,
		"fallback": "solar:move-square-bold",
	});
}

export default Component;
