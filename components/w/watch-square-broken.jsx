import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1_dsdb2x.css';
import '../../css/d/dcaow2b1t.css';
import '../../css/z/zgx_6cbcr.css';
import '../../css/t/t0-e8sb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e1_dsdb2x"/><path class="dcaow2b1t"/><path class="zgx_6cbcr"/><path class="t0-e8sb9y"/></g>`,
		"fallback": "solar:watch-square-broken",
	});
}

export default Component;
