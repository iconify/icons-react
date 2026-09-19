import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnhozabus.css';
import '../../css/y/yhq5o5b3n.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPancreasNegative0)" class="cuyn6tgcc"><path class="xnhozabus"/><path clip-rule="evenodd" class="yhq5o5b3n"/></g><defs><clipPath id="healthiconsPancreasNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:pancreas-negative",
	});
}

export default Component;
