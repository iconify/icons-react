import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hhl-y8bws.css';
import '../../css/h/hdz8l5g_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hhl-y8bws"/><path class="hdz8l5g_x"/></g>`,
		"fallback": "solar:volleyball-line-duotone",
	});
}

export default Component;
