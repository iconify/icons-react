import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htek8vqjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htek8vqjf"/>`,
		"fallback": "bxs:joystick-button",
	});
}

export default Component;
