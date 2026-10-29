import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dcqoumbac.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/q/qx-ll7bdv.css';
import '../../css/x/xkpay_b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dcqoumbac wm-k"/><path class="r3yr01bjg wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="qx-ll7bdv wm-a"/><path class="wm-a xkpay_b2j"/></g>`,
		"fallback": "withicons:shield-x-engrave",
	});
}

export default Component;
