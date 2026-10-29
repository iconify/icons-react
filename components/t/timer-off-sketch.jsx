import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwpmtnzgp.css';
import '../../css/r/rn0af2bkg.css';
import '../../css/q/q7nzdkbef.css';
import '../../css/q/qm5omdbnp.css';
import '../../css/z/zj1vorbtd.css';
import '../../css/x/xmdw_emec.css';
import '../../css/x/xe2yj3rul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kwpmtnzgp"/><path class="rn0af2bkg wm-k"/><path class="q7nzdkbef wm-a"/><path class="qm5omdbnp wm-s"/><path class="wm-k zj1vorbtd"/><path class="wm-a xmdw_emec"/><path class="wm-s xe2yj3rul"/></g>`,
		"fallback": "withicons:timer-off-sketch",
	});
}

export default Component;
