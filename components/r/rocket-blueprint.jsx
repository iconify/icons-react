import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ke2a-ll4x.css';
import '../../css/b/b_q0iqbmp.css';
import '../../css/u/u752fxbbw.css';
import '../../css/i/i6r6qvb2q.css';
import '../../css/q/qje21_bkd.css';
import '../../css/j/jfi9_gbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ke2a-ll4x wm-deco"/><path class="b_q0iqbmp wm-deco"/><path class="u752fxbbw wm-deco"/><path class="i6r6qvb2q wm-k"/><path class="qje21_bkd wm-a"/><path class="jfi9_gbju wm-k"/></g>`,
		"fallback": "withicons:rocket-blueprint",
	});
}

export default Component;
