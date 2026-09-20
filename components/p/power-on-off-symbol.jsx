import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmsr3kb1i.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/n/n2p5-ed3s.css';
import '../../css/m/mt5816bop.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmsr3kb1i"/><g class="brzn_0bpr"><path class="n2p5-ed3s"/><path class="mt5816bop"/></g>`,
		"fallback": "openmoji:power-on-off-symbol",
	});
}

export default Component;
