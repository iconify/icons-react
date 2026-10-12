import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdbx7d46q.css';
import '../../css/s/s004ncbgf.css';
import '../../css/y/yk4iu8xhg.css';
import '../../css/i/i-lk88u4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdbx7d46q"/><path class="s004ncbgf"/><path class="yk4iu8xhg"/><path clip-rule="evenodd" class="i-lk88u4y"/></g>`,
		"fallback": "andrsrxn:taco",
	});
}

export default Component;
