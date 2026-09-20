import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jbz4_mzqr.css';
import '../../css/t/tyv5mcb3q.css';
import '../../css/j/j9lqcdb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jbz4_mzqr"/><path class="tyv5mcb3q"/><path class="j9lqcdb9y"/></g>`,
		"fallback": "solar:question-mark-broken",
	});
}

export default Component;
