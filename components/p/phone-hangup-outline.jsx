import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdq0fiufx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdq0fiufx"/>`,
		"fallback": "flowbite:phone-hangup-outline",
	});
}

export default Component;
