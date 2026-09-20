import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ku9otcwlu.css';
import '../../css/j/jj5u0q_4q.css';
import '../../css/y/ycuo71n9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ku9otcwlu"/><path class="jj5u0q_4q"/><path clip-rule="evenodd" class="ycuo71n9f"/></g>`,
		"fallback": "solar:star-ring-bold-duotone",
	});
}

export default Component;
