import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/c/cav59xbml.css';
import '../../css/b/br67s8scl.css';
import '../../css/l/lzx8y-bqc.css';
import '../../css/f/f9zkcvl4q.css';
import '../../css/z/zv4od6y8e.css';
import '../../css/c/c0o6i1buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxZe93oRT" x1="10" x2="14" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="cav59xbml wm-k"/><path class="br67s8scl wm-deco"/><path fill="url(#SVGxZe93oRT)" class="lzx8y-bqc wm-k"/><path class="f9zkcvl4q wm-shadow"/><path class="wm-shine zv4od6y8e"/><path class="c0o6i1buc wm-shine"/></g>`,
		"fallback": "withicons-valentine:shirt",
	});
}

export default Component;
