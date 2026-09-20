import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkmtr3pxm.css';
import '../../css/u/u5u-7kwlh.css';
import '../../css/a/a01zqgaln.css';
import '../../css/i/ix0y5hbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zkmtr3pxm"/><path class="u5u-7kwlh"/><path class="a01zqgaln"/><path class="ix0y5hbra"/></g>`,
		"fallback": "solar:skirt-bold-duotone",
	});
}

export default Component;
