import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zo_xkwsga.css';
import '../../css/f/fvr6bd24w.css';
import '../../css/p/pb3v9gt6k.css';
import '../../css/a/ad-x1bbwf.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/x/x8aa_gbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zo_xkwsga"/><path class="fvr6bd24w"/><path class="pb3v9gt6k"/><path class="ad-x1bbwf wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="wm-a x8aa_gbnz"/></g>`,
		"fallback": "withicons-kawaii:laugh",
	});
}

export default Component;
