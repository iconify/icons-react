import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjhi0obvl.css';
import '../../css/j/jdf3kbcvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hjhi0obvl"/><path class="jdf3kbcvr"/></g>`,
		"fallback": "andrsrxn:signal-status-medium",
	});
}

export default Component;
