import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlk0x0bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlk0x0bsy"/>`,
		"fallback": "mingcute:map-pin-x-inside-fill",
	});
}

export default Component;
