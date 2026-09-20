import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0ambbcsj.css';
import '../../css/c/ccmj7ubct.css';
import '../../css/f/f_hvwcoce.css';
import '../../css/d/dzk5w4biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r0ambbcsj"/><path class="ccmj7ubct"/><path class="f_hvwcoce"/><path class="dzk5w4biy"/></g>`,
		"fallback": "solar:sticker-smile-circle-2-bold-duotone",
	});
}

export default Component;
