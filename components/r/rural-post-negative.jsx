import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynb4q3s_a.css';
import '../../css/j/jvbo3t3so.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRuralPostNegative0)" class="cuyn6tgcc"><path class="ynb4q3s_a"/><path clip-rule="evenodd" class="jvbo3t3so"/></g><defs><clipPath id="healthiconsRuralPostNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:rural-post-negative",
	});
}

export default Component;
