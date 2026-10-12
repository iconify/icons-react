import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zraeqovwy.css';
import '../../css/q/qfd3aux-i.css';
import '../../css/j/j3rfhvdst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 3.06 3.2)" class="zraeqovwy"/><rect transform="matrix(0 1 1 0 3.06 3.2)" class="qfd3aux-i"/><path class="j3rfhvdst"/></g>`,
		"fallback": "andrsrxn:square-divide-horizontal",
	});
}

export default Component;
