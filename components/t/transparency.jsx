import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otjf8rboj.css';
import '../../css/h/h27vhbcct.css';
import '../../css/k/kpnvcyywc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otjf8rboj"/><circle class="h27vhbcct"/><path class="kpnvcyywc"/></g>`,
		"fallback": "andrsrxn:transparency",
	});
}

export default Component;
