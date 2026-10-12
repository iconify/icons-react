import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0_8ipbhp.css';
import '../../css/s/slmv85b_b.css';
import '../../css/u/ul2onkbvk.css';
import '../../css/y/y789qhdyp.css';
import '../../css/d/dbllshbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0_8ipbhp"/><rect class="slmv85b_b"/><path class="ul2onkbvk"/><rect class="y789qhdyp"/><path class="dbllshbzd"/></g>`,
		"fallback": "andrsrxn:mouse-off",
	});
}

export default Component;
