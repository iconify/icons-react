import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v--mbnbrz.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/u/u62usgb_g.css';
import '../../css/g/g0jhk334h.css';
import '../../css/s/swjvgl4kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v--mbnbrz wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="u62usgb_g wm-k"/><path class="g0jhk334h wm-a"/><path class="swjvgl4kp wm-k"/></g>`,
		"fallback": "withicons:soup-blueprint",
	});
}

export default Component;
