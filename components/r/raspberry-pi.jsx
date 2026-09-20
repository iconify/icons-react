import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esjpsubue.css';
import '../../css/b/bmakujbxs.css';
import '../../css/r/rbx-yppks.css';
import '../../css/q/qnppyyb3q.css';
import '../../css/t/tlddrwb8b.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/rj6ezmbfg.css';
import '../../css/e/eky43sbuh.css';
import '../../css/l/lc4j7nzkf.css';
import '../../css/l/lcdtrm8my.css';
import '../../css/w/wfnjik3wm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esjpsubue"/><path class="bmakujbxs"/><path class="rbx-yppks"/><path class="qnppyyb3q"/><path class="tlddrwb8b"/><g class="ij2x_72vy"><path class="rj6ezmbfg"/><path class="eky43sbuh"/><path class="lc4j7nzkf"/><path class="lcdtrm8my"/><path class="wfnjik3wm"/></g>`,
		"fallback": "openmoji:raspberry-pi",
	});
}

export default Component;
