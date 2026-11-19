import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae2631u4q.css';
import '../../css/x/xugu1j1ly.css';
import '../../css/m/mfucq7x_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ae2631u4q"/><path class="xugu1j1ly"/><path class="mfucq7x_r"/></g>`,
		"fallback": "andrsrxn:paycheck-plus",
	});
}

export default Component;
