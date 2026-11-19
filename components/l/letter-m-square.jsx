import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/i/ig7og-50b.css';
import '../../css/n/n3dz42nmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="ig7og-50b"/><path class="n3dz42nmf"/></g>`,
		"fallback": "andrsrxn:letter-m-square",
	});
}

export default Component;
