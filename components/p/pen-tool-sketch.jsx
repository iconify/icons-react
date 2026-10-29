import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qmvqxnbsf.css';
import '../../css/y/ywltx_bxb.css';
import '../../css/d/d5s1xp9pm.css';
import '../../css/x/xnopv6zow.css';
import '../../css/r/rd2rs6bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qmvqxnbsf"/><path class="wm-k ywltx_bxb"/><path class="d5s1xp9pm wm-a"/><path class="wm-k xnopv6zow"/><path class="rd2rs6bjz wm-a"/></g>`,
		"fallback": "withicons:pen-tool-sketch",
	});
}

export default Component;
