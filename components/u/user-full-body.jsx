import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5kijyb6p.css';
import '../../css/d/dhhx1wbsr.css';
import '../../css/m/m7jb6ub8v.css';
import '../../css/t/t111xcc8u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5kijyb6p"/><path class="dhhx1wbsr"/><path class="m7jb6ub8v"/><path class="t111xcc8u"/></g>`,
		"fallback": "streamline-flex-color:user-full-body",
	});
}

export default Component;
