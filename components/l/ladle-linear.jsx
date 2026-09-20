import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s7b0svbou.css';
import '../../css/j/jytd4wl2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s7b0svbou"/><path class="jytd4wl2c"/></g>`,
		"fallback": "solar:ladle-linear",
	});
}

export default Component;
