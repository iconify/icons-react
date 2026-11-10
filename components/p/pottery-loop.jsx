import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q-4brybas.css';
import '../../css/f/f_z3ubcoq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q-4brybas"/><path clip-rule="evenodd" class="f_z3ubcoq"/></g>`,
		"fallback": "at-icons:pottery-loop",
	});
}

export default Component;
