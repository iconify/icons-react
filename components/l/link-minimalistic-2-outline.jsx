import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgd6nob9p.css';
import '../../css/y/yxozyjbzj.css';
import '../../css/b/b_tob1ipw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wgd6nob9p"/><path class="yxozyjbzj"/><path class="b_tob1ipw"/></g>`,
		"fallback": "solar:link-minimalistic-2-outline",
	});
}

export default Component;
