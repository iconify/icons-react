import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d64cfyj1i.css';
import '../../css/a/a1sf-3bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d64cfyj1i"/><path class="a1sf-3bpq"/></g>`,
		"fallback": "solar:pie-chart-3-broken",
	});
}

export default Component;
