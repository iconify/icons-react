import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/t/txk_m_bon.css';
import '../../css/e/eveg1sbcl.css';
import '../../css/n/ns0fhccwl.css';
import '../../css/s/s6le__b7v.css';
import '../../css/w/wf-yddc_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="si_mtzbvj"/><path class="txk_m_bon"/><path class="eveg1sbcl"/><path class="ns0fhccwl"/><path class="s6le__b7v"/><path class="wf-yddc_g"/></g>`,
		"fallback": "solar:socket-broken",
	});
}

export default Component;
