import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgd048bxt.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/f/fdxfv3b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgd048bxt"/><path class="c_9t11wpq"/><path class="fdxfv3b7l"/></g>`,
		"fallback": "andrsrxn:stairs-up",
	});
}

export default Component;
