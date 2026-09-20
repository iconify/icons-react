import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jwslwwb9l.css';
import '../../css/i/i-prw--3g.css';
import '../../css/c/c1788rp0v.css';
import '../../css/t/t0r8m-b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jwslwwb9l"/><path class="i-prw--3g"/><path class="c1788rp0v"/><path class="t0r8m-b4e"/></g>`,
		"fallback": "solar:smart-home-angle-broken",
	});
}

export default Component;
