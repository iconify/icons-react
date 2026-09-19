import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gkzrwab8u.css';
import '../../css/d/dat65o4mr.css';
import '../../css/z/z3-8uyfzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gkzrwab8u"/><path class="dat65o4mr"/><path class="z3-8uyfzn"/></g>`,
		"fallback": "bi:sort-alpha-down-alt",
	});
}

export default Component;
