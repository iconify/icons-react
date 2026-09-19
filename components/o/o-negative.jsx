import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cj6yv2-uu.css';
import '../../css/x/xc1-cf9it.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsONegative0)" class="cuyn6tgcc"><path class="cj6yv2-uu"/><path clip-rule="evenodd" class="xc1-cf9it"/></g><defs><clipPath id="healthiconsONegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:o-negative",
	});
}

export default Component;
