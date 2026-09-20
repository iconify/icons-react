import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p1268ob7b.css';
import '../../css/r/r4s01_h_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p1268ob7b"/><path class="r4s01_h_a"/></g>`,
		"fallback": "solar:ticket-broken",
	});
}

export default Component;
