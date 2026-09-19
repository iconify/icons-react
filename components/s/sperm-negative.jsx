import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0vyc3wrs.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsSpermNegative0)"><path clip-rule="evenodd" class="w0vyc3wrs"/></g><defs><clipPath id="healthiconsSpermNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:sperm-negative",
	});
}

export default Component;
