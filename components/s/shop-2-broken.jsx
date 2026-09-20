import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/srni6655m.css';
import '../../css/t/tzzk-9bvs.css';
import '../../css/f/f0gjgkb7s.css';
import '../../css/k/k5axyabbr.css';
import '../../css/o/ohitj-nsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="srni6655m"/><path class="tzzk-9bvs"/><path class="f0gjgkb7s"/><path class="k5axyabbr"/><path class="ohitj-nsd"/></g>`,
		"fallback": "solar:shop-2-broken",
	});
}

export default Component;
