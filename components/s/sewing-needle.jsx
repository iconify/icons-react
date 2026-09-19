import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1jahxmkm.css';
import '../../css/q/q_x4ucc4q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j1jahxmkm"/><path class="q_x4ucc4q"/></g>`,
		"fallback": "at-icons:sewing-needle",
	});
}

export default Component;
