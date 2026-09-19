import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlhx9rbvz.css';
import '../../css/n/n567av3lf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMinistryOfHealthNegative0)" class="cuyn6tgcc"><path class="rlhx9rbvz"/><path clip-rule="evenodd" class="n567av3lf"/></g><defs><clipPath id="healthiconsMinistryOfHealthNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ministry-of-health-negative",
	});
}

export default Component;
