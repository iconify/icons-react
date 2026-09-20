import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c4fmg6oet.css';
import '../../css/e/esbbr54lb.css';
import '../../css/c/ctg14gobl.css';
import '../../css/o/o3lk08g7r.css';
import '../../css/w/w44z6ybzz.css';
import '../../css/u/ur-0t6b4e.css';
import '../../css/x/xxfyb4b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c4fmg6oet"/><path class="esbbr54lb"/><path class="ctg14gobl"/><path class="o3lk08g7r"/><path class="w44z6ybzz"/><path class="ur-0t6b4e"/><path class="xxfyb4b_r"/></g>`,
		"fallback": "solar:notebook-broken",
	});
}

export default Component;
