import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai7np9bek.css';
import '../../css/f/fv-n5-38p.css';
import '../../css/v/vu1japbay.css';
import '../../css/u/ucci88bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ai7np9bek"/><path class="fv-n5-38p"/><rect class="vu1japbay"/><path class="ucci88bxh"/></g>`,
		"fallback": "andrsrxn:mouse-right-click",
	});
}

export default Component;
