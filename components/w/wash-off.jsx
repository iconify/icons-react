import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm_rodb_l.css';
import '../../css/f/f-xs0w6lp.css';
import '../../css/y/y__aq1brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sm_rodb_l"/><path class="f-xs0w6lp"/><path class="y__aq1brm"/></g>`,
		"fallback": "andrsrxn:wash-off",
	});
}

export default Component;
