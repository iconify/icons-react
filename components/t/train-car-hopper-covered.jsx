import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-4ae2bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-4ae2bhy"/>`,
		"fallback": "mdi:train-car-hopper-covered",
	});
}

export default Component;
