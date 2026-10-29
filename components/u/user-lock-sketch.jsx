import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cpt_bn45o.css';
import '../../css/y/yf__y5x2v.css';
import '../../css/e/e-vt1mrhx.css';
import '../../css/y/yy1kui28t.css';
import '../../css/o/of1s15oee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cpt_bn45o"/><path class="wm-k yf__y5x2v"/><path class="e-vt1mrhx wm-k"/><path class="wm-a yy1kui28t"/><path class="of1s15oee wm-s"/></g>`,
		"fallback": "withicons:user-lock-sketch",
	});
}

export default Component;
