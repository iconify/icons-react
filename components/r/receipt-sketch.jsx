import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yz047xxvk.css';
import '../../css/l/lq_kbcb4p.css';
import '../../css/a/a__jogb4x.css';
import '../../css/v/v_rv7fwiy.css';
import '../../css/h/h1d8v6btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yz047xxvk"/><path class="lq_kbcb4p wm-k"/><path class="a__jogb4x wm-a"/><path class="v_rv7fwiy wm-k"/><path class="h1d8v6btm wm-a"/></g>`,
		"fallback": "withicons:receipt-sketch",
	});
}

export default Component;
