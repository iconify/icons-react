import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lk95xk_xe.css';
import '../../css/f/flicwibwu.css';
import '../../css/v/va1l46f4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.21 21.29)" class="lk95xk_xe"/><path class="flicwibwu"/><path class="va1l46f4v"/></g>`,
		"fallback": "andrsrxn:matrix",
	});
}

export default Component;
