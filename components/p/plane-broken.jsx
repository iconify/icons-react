import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a39p7hbij.css';
import '../../css/q/qqvgubc5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a39p7hbij"/><path class="qqvgubc5r"/></g>`,
		"fallback": "solar:plane-broken",
	});
}

export default Component;
