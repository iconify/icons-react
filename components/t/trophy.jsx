import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uwweowbzl.css';
import '../../css/c/cyxd695zt.css';
import '../../css/l/l_ve02ule.css';
import '../../css/r/rwruoy8xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uwweowbzl"/><path class="cyxd695zt"/><path class="l_ve02ule"/><path class="rwruoy8xg"/></g>`,
		"fallback": "hugeicons:trophy",
	});
}

export default Component;
