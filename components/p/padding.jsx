import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pryzs7ham.css';
import '../../css/b/bx6r8nbqq.css';
import '../../css/j/jy42i8bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pryzs7ham"/><path class="bx6r8nbqq"/><path class="jy42i8bgg"/></g>`,
		"fallback": "andrsrxn:padding",
	});
}

export default Component;
