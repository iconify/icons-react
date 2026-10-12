import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa3dpbb_n.css';
import '../../css/x/x3q4mjq5t.css';
import '../../css/d/di91dybwj.css';
import '../../css/k/kty0tbbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fa3dpbb_n"/><path class="x3q4mjq5t"/><path class="di91dybwj"/><path class="kty0tbbzr"/></g>`,
		"fallback": "andrsrxn:text-sparkle",
	});
}

export default Component;
