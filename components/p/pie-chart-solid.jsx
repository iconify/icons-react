import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9upmptde.css';
import '../../css/z/zbpeuobne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9upmptde"/><path class="zbpeuobne"/></g>`,
		"fallback": "flowbite:pie-chart-solid",
	});
}

export default Component;
