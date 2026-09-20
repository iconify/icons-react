import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d15e38t2g.css';
import '../../css/k/kmqbbzs0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d15e38t2g"/><path class="kmqbbzs0p"/></g>`,
		"fallback": "solar:square-top-down-line-duotone",
	});
}

export default Component;
