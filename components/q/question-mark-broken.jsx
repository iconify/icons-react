import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jbz4_mzqr.css';
import '../../css/t/tyv5mcb3q.css';
import '../../css/n/n6_kje8jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jbz4_mzqr"/><path class="tyv5mcb3q"/><path class="n6_kje8jt"/></g>`,
		"fallback": "solar:question-mark-broken",
	});
}

export default Component;
