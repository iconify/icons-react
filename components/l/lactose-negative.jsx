import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/inmr35bmm.css';
import '../../css/i/ij1h_i4xk.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsLactoseNegative0)" class="cuyn6tgcc"><path class="inmr35bmm"/><path clip-rule="evenodd" class="ij1h_i4xk"/></g><defs><clipPath id="healthiconsLactoseNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:lactose-negative",
	});
}

export default Component;
