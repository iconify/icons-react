import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e182r_bms.css';
import '../../css/f/f82hu7bzi.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMachineryNegative0)" class="cuyn6tgcc"><path class="e182r_bms"/><path clip-rule="evenodd" class="f82hu7bzi"/></g><defs><clipPath id="healthiconsMachineryNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:machinery-negative",
	});
}

export default Component;
