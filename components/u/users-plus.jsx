import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnvq9ycaz.css';
import '../../css/y/ym658y2kh.css';
import '../../css/n/nsz51i0oo.css';
import '../../css/c/c__hu_bvj.css';
import '../../css/x/x6_m7jbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gnvq9ycaz"/><path class="ym658y2kh"/><path class="nsz51i0oo"/><path class="c__hu_bvj"/><path class="x6_m7jbzc"/></g>`,
		"fallback": "andrsrxn:users-plus",
	});
}

export default Component;
