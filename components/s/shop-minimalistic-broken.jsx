import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rcu0y_wjn.css';
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
		"content": `<g class="ipq1z-bjh"><path class="rcu0y_wjn"/><path class="f0gjgkb7s"/><path class="k5axyabbr"/><path class="ohitj-nsd"/></g>`,
		"fallback": "solar:shop-minimalistic-broken",
	});
}

export default Component;
