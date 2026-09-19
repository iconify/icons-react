import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfi5d0nul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfi5d0nul"/>`,
		"fallback": "flowbite:pause-outline",
	});
}

export default Component;
