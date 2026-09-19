import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k41846-ov.css';
import '../../css/y/y6u_32b-i.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsJusticeNegative0)" class="cuyn6tgcc"><path class="k41846-ov"/><path clip-rule="evenodd" class="y6u_32b-i"/></g><defs><clipPath id="healthiconsJusticeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:justice-negative",
	});
}

export default Component;
