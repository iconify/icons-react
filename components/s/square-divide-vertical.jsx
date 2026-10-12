import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zraeqovwy.css';
import '../../css/q/qfd3aux-i.css';
import '../../css/t/tp10qepid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 20.72 3.13)" class="zraeqovwy"/><rect transform="matrix(-1 0 0 1 20.72 3.13)" class="qfd3aux-i"/><path class="tp10qepid"/></g>`,
		"fallback": "andrsrxn:square-divide-vertical",
	});
}

export default Component;
