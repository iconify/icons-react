import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5bfowbny.css';
import '../../css/v/v8ox6mbiy.css';
import '../../css/o/ox6mv7ofr.css';
import '../../css/f/f840z-b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5bfowbny"/><path class="v8ox6mbiy"/><rect class="ox6mv7ofr"/><path class="f840z-b6d"/></g>`,
		"fallback": "andrsrxn:seek-forward-rtl",
	});
}

export default Component;
