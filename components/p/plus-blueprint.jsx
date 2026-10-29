import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mxzs_g6co.css';
import '../../css/b/bd7s4lb_v.css';
import '../../css/n/nh6kcmtjb.css';
import '../../css/t/tv0sudbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mxzs_g6co wm-deco"/><path class="bd7s4lb_v wm-deco"/><path class="nh6kcmtjb"/><path class="tv0sudbup"/></g>`,
		"fallback": "withicons:plus-blueprint",
	});
}

export default Component;
