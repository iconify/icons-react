import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr28d1ttx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr28d1ttx"/>`,
		"fallback": "coolicons:joystick-fill-round",
	});
}

export default Component;
