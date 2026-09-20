import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_-vy9bff.css';
import '../../css/s/src5g-5zv.css';
import '../../css/p/pbkmeu61n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x_-vy9bff"/><path class="src5g-5zv"/><path class="pbkmeu61n"/></g>`,
		"fallback": "solar:map-point-rotate-broken",
	});
}

export default Component;
