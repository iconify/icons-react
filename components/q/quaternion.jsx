import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k8uotupls.css';
import '../../css/u/ub4xufxdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k8uotupls"/><path class="ub4xufxdd"/></g>`,
		"fallback": "at-icons:quaternion",
	});
}

export default Component;
