import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p15i5rb8r.css';
import '../../css/a/aqgqxc--o.css';
import '../../css/v/v_g7r_1us.css';
import '../../css/o/ocnol1b_l.css';
import '../../css/u/utqgvykzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p15i5rb8r wm-deco"/><path class="aqgqxc--o wm-deco"/><path class="v_g7r_1us wm-deco"/><path class="ocnol1b_l wm-k"/><path class="utqgvykzx wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-plus-blueprint",
	});
}

export default Component;
