import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fxry8qb4t.css';
import '../../css/f/fhn7b6sgb.css';
import '../../css/s/spzn2d-cx.css';
import '../../css/o/ot9uu0bvw.css';
import '../../css/t/t6ecn0b2f.css';
import '../../css/p/ptbvm8vxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fxry8qb4t"/><path class="fhn7b6sgb wm-k"/><path class="spzn2d-cx wm-k"/><circle class="ot9uu0bvw wm-k"/><path class="t6ecn0b2f wm-k"/><path class="ptbvm8vxq wm-a"/></g>`,
		"fallback": "withicons:love-lock-sketch",
	});
}

export default Component;
