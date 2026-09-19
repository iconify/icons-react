import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/finwch3nf.css';
import '../../css/r/r8m7_xn9z.css';
import '../../css/k/kaa7_9syf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="finwch3nf"/><path class="r8m7_xn9z"/><path class="kaa7_9syf"/></g>`,
		"fallback": "hugeicons:parabola-02",
	});
}

export default Component;
