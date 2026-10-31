import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/pef4yldcv.css';
import '../../css/j/j2l687bmx.css';
import '../../css/j/j05ojpb3j.css';
import '../../css/k/kw1lr2l_j.css';
import '../../css/b/bmrxgykcg.css';
import '../../css/r/rw86e5bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1eFmwjpS" x1="1.01" x2="23" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG1eFmwjpS)" class="pef4yldcv wm-k"/><path class="j2l687bmx wm-a"/><path class="j05ojpb3j wm-shine"/><path class="kw1lr2l_j wm-shine"/><path class="bmrxgykcg wm-shine"/><path class="rw86e5bap wm-shine"/></g>`,
		"fallback": "withicons-lunar:truck",
	});
}

export default Component;
