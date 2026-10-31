import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqf1r_khc.css';
import '../../css/l/l147rshrj.css';
import '../../css/h/hwzpu_m4y.css';
import '../../css/p/psm3w7b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aqf1r_khc wm-shadow"/><path class="l147rshrj wm-shadow"/><path class="hwzpu_m4y"/><path class="psm3w7b1q"/></g>`,
		"fallback": "withicons-brutal:shopping-bag",
	});
}

export default Component;
