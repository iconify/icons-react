import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmjl2443q.css';
import '../../css/m/m_pyhpjsz.css';
import '../../css/k/k8v0mpbpn.css';
import '../../css/r/rpsnpuyag.css';
import '../../css/n/ng58m8ixe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vmjl2443q"/><path class="m_pyhpjsz"/><path class="k8v0mpbpn"/><rect class="rpsnpuyag"/><path class="ng58m8ixe"/></g>`,
		"fallback": "andrsrxn:mouse-right",
	});
}

export default Component;
