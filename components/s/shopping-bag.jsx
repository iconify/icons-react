import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/s2i2tr7-y.css';
import '../../css/t/tarp-kbuf.css';
import '../../css/k/k3k__0byy.css';
import '../../css/w/wncjr0bvs.css';
import '../../css/n/n80hnx_ns.css';
import '../../css/a/a4zvnybmp.css';
import '../../css/n/nitvar4cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFktW4cac" x1="10" x2="14" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="s2i2tr7-y wm-k"/><path class="tarp-kbuf wm-deco"/><path fill="url(#SVGFktW4cac)" class="k3k__0byy wm-k"/><path class="wm-shadow wncjr0bvs"/><path class="n80hnx_ns wm-shine"/><path class="a4zvnybmp wm-shine"/><path class="nitvar4cc wm-shine"/></g>`,
		"fallback": "withicons-valentine:shopping-bag",
	});
}

export default Component;
