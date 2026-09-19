import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0wtp628f.css';
import '../../css/u/u80qb9bdf.css';
import '../../css/q/q7zvs2b6v.css';
import '../../css/t/t0vbuy1_x.css';
import '../../css/j/j6wvgiblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="i0wtp628f"/><path class="u80qb9bdf"/><circle class="q7zvs2b6v"/><path class="t0vbuy1_x"/><path class="j6wvgiblg"/></g>`,
		"fallback": "hugeicons:motorbike-01",
	});
}

export default Component;
