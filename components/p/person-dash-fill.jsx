import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fih21yb_z.css';
import '../../css/j/j64n2mbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fih21yb_z"/><path class="j64n2mbvc"/></g>`,
		"fallback": "bi:person-dash-fill",
	});
}

export default Component;
