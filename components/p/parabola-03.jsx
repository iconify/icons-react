import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/finwch3nf.css';
import '../../css/p/p0naegbcw.css';
import '../../css/k/kaa7_9syf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="finwch3nf"/><path class="p0naegbcw"/><path class="kaa7_9syf"/></g>`,
		"fallback": "hugeicons:parabola-03",
	});
}

export default Component;
