import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6y8wvbql.css';
import '../../css/c/coq_nrb9p.css';
import '../../css/i/ifa6tqr9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6y8wvbql"/><path class="coq_nrb9p"/><path class="ifa6tqr9c"/></g>`,
		"fallback": "hugeicons:tree-01",
	});
}

export default Component;
