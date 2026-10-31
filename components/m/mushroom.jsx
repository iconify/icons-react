import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/t4gxa5tmo.css';
import '../../css/r/r0drqzbmf.css';
import '../../css/e/ez09xju5v.css';
import '../../css/m/mlm430bfm.css';
import '../../css/n/n1hn7vbok.css';
import '../../css/x/xaqulqxcr.css';
import '../../css/n/nd74ttbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxZe93oRT" x1="10" x2="14" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="t4gxa5tmo wm-k"/><path class="r0drqzbmf wm-deco"/><path class="ez09xju5v wm-k"/><path fill="url(#SVGxZe93oRT)" class="mlm430bfm wm-k"/><path class="n1hn7vbok wm-shadow"/><path class="wm-shine xaqulqxcr"/><path class="nd74ttbfs wm-shine"/></g>`,
		"fallback": "withicons-valentine:mushroom",
	});
}

export default Component;
