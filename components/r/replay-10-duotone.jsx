import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5jd71bvg.css';
import '../../css/r/r4kfx2b8v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d5jd71bvg"/><path class="r4kfx2b8v"/></g>`,
		"fallback": "pullo:replay-10-duotone",
	});
}

export default Component;
