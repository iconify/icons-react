import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whble8bgt.css';
import '../../css/c/cil-zdl9x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNetwork5gNegative0)" class="cuyn6tgcc"><path class="whble8bgt"/><path clip-rule="evenodd" class="cil-zdl9x"/></g><defs><clipPath id="healthiconsNetwork5gNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:network-5g-negative",
	});
}

export default Component;
