import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nvkytcc7n.css';
import '../../css/o/oxnljyb4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nvkytcc7n"/><path class="oxnljyb4v"/></g>`,
		"fallback": "bi:stickies",
	});
}

export default Component;
