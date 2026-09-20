import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wgd6nob9p.css';
import '../../css/y/yxozyjbzj.css';
import '../../css/j/jplqmm68v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="wgd6nob9p"/><path class="yxozyjbzj"/></g><path class="jplqmm68v"/></g>`,
		"fallback": "solar:link-minimalistic-2-bold-duotone",
	});
}

export default Component;
