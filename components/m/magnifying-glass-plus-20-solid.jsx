import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4zp7bcdh.css';
import '../../css/r/r81hjcv_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y4zp7bcdh"/><path clip-rule="evenodd" class="r81hjcv_h"/></g>`,
		"fallback": "heroicons:magnifying-glass-plus-20-solid",
	});
}

export default Component;
