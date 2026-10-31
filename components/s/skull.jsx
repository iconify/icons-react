import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bn1qcbbrw.css';
import '../../css/a/a-xjehbfr.css';
import '../../css/d/dqreum-1h.css';
import '../../css/c/cj37tpb3a.css';
import '../../css/v/vg5rwyv5u.css';
import '../../css/r/rl6lo1bev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="bn1qcbbrw"/><path class="a-xjehbfr wm-shine"/><path class="dqreum-1h wm-shine"/><path class="cj37tpb3a wm-shine"/><path class="vg5rwyv5u wm-shine"/><path class="rl6lo1bev wm-shine"/></g>`,
		"fallback": "withicons-utsav:skull",
	});
}

export default Component;
