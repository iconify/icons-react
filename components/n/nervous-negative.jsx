import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqvbbja5z.css';
import '../../css/t/tbm8j2f_f.css';
import '../../css/h/hr8u48_gi.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNervousNegative0)" class="cuyn6tgcc"><path class="uqvbbja5z"/><path clip-rule="evenodd" class="tbm8j2f_f"/><path clip-rule="evenodd" class="hr8u48_gi"/></g><defs><clipPath id="healthiconsNervousNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:nervous-negative",
	});
}

export default Component;
