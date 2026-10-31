import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kzbq1ab5b.css';
import '../../css/w/wzv236bbt.css';
import '../../css/s/s79bhwb7c.css';
import '../../css/e/ekzqsdbee.css';
import '../../css/z/zznmpfull.css';
import '../../css/h/h0aioje2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcmUVFdva" x1="10.01" x2="14.01" y1="3.19" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kzbq1ab5b wm-k"/><path class="wm-deco wzv236bbt"/><path fill="url(#SVGcmUVFdva)" class="s79bhwb7c wm-k"/><path class="ekzqsdbee wm-shadow"/><path class="wm-shine zznmpfull"/><path class="h0aioje2y wm-shine"/></g>`,
		"fallback": "withicons-valentine:lamp-desk",
	});
}

export default Component;
