import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-ev1iyet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-ev1iyet"/>`,
		"fallback": "mdi:land-plots-circle",
	});
}

export default Component;
