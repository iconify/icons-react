import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqxl3tium.css';
import '../../css/i/iffsj_b_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nqxl3tium"/><path clip-rule="evenodd" class="iffsj_b_r"/></g>`,
		"fallback": "codicon:issues",
	});
}

export default Component;
