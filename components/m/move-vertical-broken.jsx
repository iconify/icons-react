import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/frg4agggy.css';
import '../../css/u/u_gvbhbmw.css';
import '../../css/x/x07ftrzei.css';
import '../../css/w/w4qe5y36z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="frg4agggy"/><path class="u_gvbhbmw"/><path class="x07ftrzei"/><path class="w4qe5y36z"/></g>`,
		"fallback": "solar:move-vertical-broken",
	});
}

export default Component;
