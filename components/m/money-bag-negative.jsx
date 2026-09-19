import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nud7t_bwn.css';
import '../../css/e/eoo40k5kz.css';
import '../../css/v/vdtzqwb2d.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMoneyBagNegative0)" class="cuyn6tgcc"><path class="nud7t_bwn"/><path clip-rule="evenodd" class="eoo40k5kz"/><path clip-rule="evenodd" class="vdtzqwb2d"/></g><defs><clipPath id="healthiconsMoneyBagNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:money-bag-negative",
	});
}

export default Component;
