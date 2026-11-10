import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9wnzubff.css';
import '../../css/e/efem8-yri.css';
import '../../css/j/j40u15-nq.css';
import '../../css/o/o_j5pac6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9wnzubff"/><path class="efem8-yri"/><path class="j40u15-nq"/><path class="o_j5pac6w"/></g>`,
		"fallback": "andrsrxn:movie",
	});
}

export default Component;
