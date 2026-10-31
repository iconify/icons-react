import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/t-br65b0x.css';
import '../../css/e/eox6pgb-y.css';
import '../../css/l/lvvvseulu.css';
import '../../css/p/povc0wm1j.css';
import '../../css/g/g_9prnbdh.css';
import '../../css/h/hlb720b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="t-br65b0x wm-k"/><path class="eox6pgb-y wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="lvvvseulu wm-k"/><path class="povc0wm1j wm-shadow"/><path class="g_9prnbdh wm-shine"/><path class="hlb720b0z wm-shine"/></g>`,
		"fallback": "withicons-valentine:lamp",
	});
}

export default Component;
