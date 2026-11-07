import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnj75y2sf.css';
import '../../css/m/mvr5y7bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnj75y2sf"/><path class="mvr5y7bsm"/></g>`,
		"fallback": "solar:star-angle-broken",
	});
}

export default Component;
