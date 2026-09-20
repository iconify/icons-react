import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fib1smptu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fib1smptu"/>`,
		"fallback": "mdi:sun-time-outline",
	});
}

export default Component;
