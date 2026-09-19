import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/em1ya_npc.css';
import '../../css/d/dqapyabwu.css';
import '../../css/r/r7s9mbhvr.css';
import '../../css/q/q5x9t_bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="em1ya_npc"/><circle class="dqapyabwu"/><path class="r7s9mbhvr"/><path class="q5x9t_bxf"/></g>`,
		"fallback": "hugeicons:music-note-03",
	});
}

export default Component;
