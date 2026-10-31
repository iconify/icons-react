import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lrd-6pzgj.css';
import '../../css/h/hpfp9ib4c.css';
import '../../css/g/guw_hidqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lrd-6pzgj wm-k"/><path fill="url(#SVGWIPAFndQ)" class="hpfp9ib4c wm-k"/><path class="guw_hidqs wm-shadow"/></g>`,
		"fallback": "withicons-valentine:table",
	});
}

export default Component;
