import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1-c6ybmp.css';
import '../../css/f/fyln2vbsb.css';
import '../../css/j/j7ixn3b2b.css';
import '../../css/j/jbvr2m_pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1-c6ybmp"/><path class="fyln2vbsb"/><rect transform="matrix(-1 0 0 1 13.84 9.58)" class="j7ixn3b2b"/><path class="jbvr2m_pf"/></g>`,
		"fallback": "andrsrxn:mouse-middle-click",
	});
}

export default Component;
