import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_72uo4ps.css';
import '../../css/s/swy39gl-j.css';
import '../../css/z/zaxqhcb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r_72uo4ps"/><path clip-rule="evenodd" class="swy39gl-j"/><path class="zaxqhcb-b"/></g>`,
		"fallback": "solar:map-point-school-bold",
	});
}

export default Component;
