import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ocujuybcd.css';
import '../../css/y/yfukz_bfm.css';
import '../../css/q/qt7btobjz.css';
import '../../css/m/m3r3og_wj.css';
import '../../css/g/g_59g7p8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ocujuybcd"/><path class="wm-k yfukz_bfm"/><path class="qt7btobjz wm-a"/><path class="m3r3og_wj wm-k"/><path class="g_59g7p8z wm-a"/></g>`,
		"fallback": "withicons:school-sketch",
	});
}

export default Component;
