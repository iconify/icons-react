import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8wxn8xap.css';
import '../../css/u/uol0hcc-e.css';
import '../../css/p/pjln1rbyq.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultNegative0)" class="cuyn6tgcc"><path class="j8wxn8xap"/><path clip-rule="evenodd" class="uol0hcc-e"/><path clip-rule="evenodd" class="pjln1rbyq"/></g><defs><clipPath id="healthiconsRdtResultNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:rdt-result-negative",
	});
}

export default Component;
