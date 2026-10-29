import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m23gp0ykz.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/i/i9rgmobgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m23gp0ykz wm-k"/><path class="r3yr01bjg wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="i9rgmobgb wm-a"/></g>`,
		"fallback": "withicons:shield-alert-engrave",
	});
}

export default Component;
