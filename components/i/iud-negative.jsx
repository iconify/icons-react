import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu0e3j1qf.css';
import '../../css/b/b7-0cyb5z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIudNegative0)" class="cuyn6tgcc"><path class="uu0e3j1qf"/><path clip-rule="evenodd" class="b7-0cyb5z"/></g><defs><clipPath id="healthiconsIudNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:iud-negative",
	});
}

export default Component;
