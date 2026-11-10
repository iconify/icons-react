import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub0nkvt-o.css';
import '../../css/f/f57i20b7j.css';
import '../../css/z/z725x6bph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ub0nkvt-o"/><path class="f57i20b7j"/><path clip-rule="evenodd" class="z725x6bph"/></g>`,
		"fallback": "at-icons:knife-cut",
	});
}

export default Component;
