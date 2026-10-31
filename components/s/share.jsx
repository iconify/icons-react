import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/gyje1dnqe.css';
import '../../css/n/nzv2i0ctp.css';
import '../../css/s/szw4oqbon.css';
import '../../css/l/lsi8p058u.css';
import '../../css/t/tmck-4b2n.css';
import '../../css/n/nxd81dghg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="gyje1dnqe wm-k"/><path class="nzv2i0ctp wm-deco"/><path fill="url(#SVG8cgrrczU)" class="szw4oqbon wm-k"/><path class="lsi8p058u wm-shadow"/><path class="tmck-4b2n wm-shine"/><path class="nxd81dghg wm-shine"/></g>`,
		"fallback": "withicons-valentine:share",
	});
}

export default Component;
