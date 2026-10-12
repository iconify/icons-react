import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8c8knbht.css';
import '../../css/t/tw74bkbce.css';
import '../../css/b/bctxr08co.css';
import '../../css/t/t6j4pgt5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8c8knbht"/><path class="tw74bkbce"/><path class="bctxr08co"/><path class="t6j4pgt5w"/></g>`,
		"fallback": "andrsrxn:scissors",
	});
}

export default Component;
