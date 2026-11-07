import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4bo1mr7m.css';
import '../../css/u/u__owgkcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k4bo1mr7m"/><path class="u__owgkcd"/></g>`,
		"fallback": "solar:thermometer-linear",
	});
}

export default Component;
