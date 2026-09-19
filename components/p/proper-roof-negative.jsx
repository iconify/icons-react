import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1ln5lb_g.css';
import '../../css/w/w0em-5mfs.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsProperRoofNegative0)" class="cuyn6tgcc"><path class="v1ln5lb_g"/><path clip-rule="evenodd" class="w0em-5mfs"/></g><defs><clipPath id="healthiconsProperRoofNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:proper-roof-negative",
	});
}

export default Component;
