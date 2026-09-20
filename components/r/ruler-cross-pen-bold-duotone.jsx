import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/n7692ibnz.css';
import '../../css/l/lgdn65bch.css';
import '../../css/c/cssvrrbqv.css';
import '../../css/z/zat-5nb4f.css';
import '../../css/n/nufdg63en.css';
import '../../css/g/g_48w92ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="n7692ibnz"/><path class="lgdn65bch"/><path class="cssvrrbqv"/></g><path class="zat-5nb4f"/><path class="nufdg63en"/><path class="g_48w92ur"/></g>`,
		"fallback": "solar:ruler-cross-pen-bold-duotone",
	});
}

export default Component;
