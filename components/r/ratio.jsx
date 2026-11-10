import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lggz5nb8b.css';
import '../../css/j/j4xi_5bdy.css';
import '../../css/z/z7oodacwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lggz5nb8b"/><path class="j4xi_5bdy"/><path class="z7oodacwh"/></g>`,
		"fallback": "andrsrxn:ratio",
	});
}

export default Component;
