import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztlevybgj.css';
import '../../css/u/uc8a7rbsm.css';
import '../../css/k/kprggsobd.css';
import '../../css/c/cfqdmgbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztlevybgj"/><path class="uc8a7rbsm"/><path clip-rule="evenodd" class="kprggsobd"/><path class="cfqdmgbtv"/></g>`,
		"fallback": "andrsrxn:tea-pod",
	});
}

export default Component;
