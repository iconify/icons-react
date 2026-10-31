import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gvm1pnbfb.css';
import '../../css/c/c45ireb_q.css';
import '../../css/x/xtfta2bry.css';
import '../../css/g/gabddue8x.css';
import '../../css/s/syh941g4m.css';
import '../../css/q/q_dauib0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gvm1pnbfb wm-shadow"/><path class="c45ireb_q"/><path class="xtfta2bry"/><path class="gabddue8x"/><path class="syh941g4m"/><path class="q_dauib0t"/></g>`,
		"fallback": "withicons-retro:printer",
	});
}

export default Component;
