import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pf_e8uhfb.css';
import '../../css/u/u46ninblz.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/o/osmz47b0d.css';
import '../../css/l/lbf19ab8s.css';
import '../../css/j/jx8x2yubt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pf_e8uhfb wm-deco"/><path class="u46ninblz wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="osmz47b0d wm-k"/><path class="lbf19ab8s wm-a"/><path class="jx8x2yubt wm-k"/></g>`,
		"fallback": "withicons:spy-blueprint",
	});
}

export default Component;
