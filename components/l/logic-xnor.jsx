import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dl7q59bzj.css';
import '../../css/j/jz601-d3q.css';
import '../../css/l/l-e5exbsa.css';
import '../../css/o/o1ptyhwmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dl7q59bzj"/><path class="jz601-d3q"/><circle class="l-e5exbsa"/><circle class="o1ptyhwmv"/></g>`,
		"fallback": "andrsrxn:logic-xnor",
	});
}

export default Component;
