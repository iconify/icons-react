import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r7bwjtgfs.css';
import '../../css/h/hkt1xxbem.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/r7_340bul.css';
import '../../css/z/zul9ixm_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r7bwjtgfs"/><path class="hkt1xxbem"/><g class="mc2zb0bvp"><path class="r7_340bul"/><path class="zul9ixm_v"/></g></g>`,
		"fallback": "solar:paint-roller-bold-duotone",
	});
}

export default Component;
