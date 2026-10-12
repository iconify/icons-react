import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/f/f3ejc33el.css';
import '../../css/v/vppvk20zr.css';
import '../../css/w/wkwz7tbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="f3ejc33el"/><path class="vppvk20zr"/><path class="wkwz7tbgj"/></g>`,
		"fallback": "andrsrxn:user-change",
	});
}

export default Component;
