import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/y/yrd9azb0o.css';
import '../../css/q/qfznl-o1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="yrd9azb0o"/><path class="qfznl-o1y"/></g>`,
		"fallback": "andrsrxn:letter-q-square",
	});
}

export default Component;
