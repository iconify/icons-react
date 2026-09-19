import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imc306b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imc306b1h"/>`,
		"fallback": "flowbite:microphone-outline",
	});
}

export default Component;
