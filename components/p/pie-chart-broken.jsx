import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vsuchmb_q.css';
import '../../css/v/vvbvajt1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vsuchmb_q"/><path class="vvbvajt1v"/></g>`,
		"fallback": "solar:pie-chart-broken",
	});
}

export default Component;
