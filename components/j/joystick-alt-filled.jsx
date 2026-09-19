import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4ydnglmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4ydnglmr"/>`,
		"fallback": "boxicons:joystick-alt-filled",
	});
}

export default Component;
