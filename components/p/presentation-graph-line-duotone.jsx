import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvep1hbek.css';
import '../../css/a/a6_8dacep.css';
import '../../css/n/n0dos7bqf.css';
import '../../css/p/p3mkqxvzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pvep1hbek"/><path class="a6_8dacep"/><path class="n0dos7bqf"/><path class="p3mkqxvzr"/></g>`,
		"fallback": "solar:presentation-graph-line-duotone",
	});
}

export default Component;
