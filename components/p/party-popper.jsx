import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hrs67gb2g.css';
import '../../css/z/zbczm_los.css';
import '../../css/z/zcs33wblc.css';
import '../../css/r/r-ow-255x.css';
import '../../css/w/w88g90beq.css';
import '../../css/a/ab1xelb3s.css';
import '../../css/z/zmh60cb_l.css';
import '../../css/d/dgsw-_bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGL18tIdPE" x1="10.26" x2="14.26" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hrs67gb2g wm-k"/><path class="wm-a zbczm_los"/><path class="wm-s zcs33wblc"/><path fill="url(#SVGL18tIdPE)" class="r-ow-255x wm-k"/><path class="w88g90beq wm-a"/><path class="ab1xelb3s wm-s"/><path class="wm-shadow zmh60cb_l"/><path class="dgsw-_bxx wm-shine"/></g>`,
		"fallback": "withicons-valentine:party-popper",
	});
}

export default Component;
