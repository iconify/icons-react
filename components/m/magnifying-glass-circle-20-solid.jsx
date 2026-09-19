import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ylb1x-b8r.css';
import '../../css/a/aac2bvy1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ylb1x-b8r"/><path clip-rule="evenodd" class="aac2bvy1x"/></g>`,
		"fallback": "heroicons:magnifying-glass-circle-20-solid",
	});
}

export default Component;
