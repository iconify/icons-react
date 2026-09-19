import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6y8wvbql.css';
import '../../css/t/t1_lhjnns.css';
import '../../css/i/ifa6tqr9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6y8wvbql"/><path class="t1_lhjnns"/><path class="ifa6tqr9c"/></g>`,
		"fallback": "hugeicons:tree-05",
	});
}

export default Component;
