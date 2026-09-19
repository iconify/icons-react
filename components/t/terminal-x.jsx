import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zolwa8b5d.css';
import '../../css/d/dwmaw09nv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zolwa8b5d"/><path class="dwmaw09nv"/></g>`,
		"fallback": "bi:terminal-x",
	});
}

export default Component;
