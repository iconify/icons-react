import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qddtombcw.css';
import '../../css/h/h4ootnb0e.css';
import '../../css/z/z3-8uyfzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qddtombcw"/><path class="h4ootnb0e"/><path class="z3-8uyfzn"/></g>`,
		"fallback": "bi:sort-numeric-down",
	});
}

export default Component;
