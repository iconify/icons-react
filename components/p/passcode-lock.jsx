import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fw09mebor.css';
import '../../css/g/gozd_acmt.css';
import '../../css/q/q0dugcn8n.css';
import '../../css/t/tpnvenbbb.css';
import '../../css/p/pbdi39bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fw09mebor"/><path class="gozd_acmt"/><path class="q0dugcn8n"/><rect class="tpnvenbbb"/><path class="pbdi39bau"/></g>`,
		"fallback": "andrsrxn:passcode-lock",
	});
}

export default Component;
