import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/mppqkft2n.css';
import '../../css/x/xi5t79zvx.css';
import '../../css/b/bsj6usbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGO9ETEcYv" x1="10" x2="14" y1="6.5" y2="17.55" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="mppqkft2n wm-k"/><path class="wm-deco xi5t79zvx"/><path fill="url(#SVGO9ETEcYv)" class="bsj6usbyg wm-k"/></g>`,
		"fallback": "withicons-valentine:variable",
	});
}

export default Component;
