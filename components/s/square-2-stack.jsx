import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw5fcqb1b.css';
import '../../css/p/pqfz5nzhw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bw5fcqb1b"/><path class="pqfz5nzhw"/></g>`,
		"fallback": "heroicons-solid:square-2-stack",
	});
}

export default Component;
