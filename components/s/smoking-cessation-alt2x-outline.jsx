import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8f-0pbsr.css';
import '../../css/e/e267uplnt.css';
import '../../css/b/bu1rx-zrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d8f-0pbsr"/><path class="e267uplnt"/><path clip-rule="evenodd" class="bu1rx-zrh"/></g>`,
		"fallback": "healthicons:smoking-cessation-alt2x-outline",
	});
}

export default Component;
