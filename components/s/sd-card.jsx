import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/ulczdnz9a.css';
import '../../css/i/ib4fg_bfs.css';
import '../../css/x/xz-q9z75o.css';
import '../../css/v/vglx5ctis.css';
import '../../css/x/xqctxfbxi.css';
import '../../css/y/yse1pv_bn.css';
import '../../css/i/i3dzmtb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ulczdnz9a wm-k"/><path class="ib4fg_bfs wm-deco"/><path class="wm-k xz-q9z75o"/><path fill="url(#SVG8cgrrczU)" class="vglx5ctis wm-k"/><path class="wm-shadow xqctxfbxi"/><path class="wm-shine yse1pv_bn"/><path class="i3dzmtb9d wm-shine"/></g>`,
		"fallback": "withicons-valentine:sd-card",
	});
}

export default Component;
