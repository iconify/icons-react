import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohym_xbud.css';
import '../../css/x/x_-vy9bff.css';
import '../../css/s/src5g-5zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ohym_xbud"/><path class="x_-vy9bff"/><path class="src5g-5zv"/></g>`,
		"fallback": "solar:map-point-rotate-linear",
	});
}

export default Component;
