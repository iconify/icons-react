import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k_mm32bgj.css';
import '../../css/c/cmdmfluho.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/l/l7zq_8b5u.css';
import '../../css/p/pq0qm0v-a.css';
import '../../css/b/b86m5ybhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k_mm32bgj wm-deco"/><path class="cmdmfluho wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="l7zq_8b5u wm-k"/><path class="pq0qm0v-a wm-a"/><path class="b86m5ybhz wm-a"/></g>`,
		"fallback": "withicons:lollipop-blueprint",
	});
}

export default Component;
