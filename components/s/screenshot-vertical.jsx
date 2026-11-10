import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fg7wbkb5q.css';
import '../../css/r/r_fy1_94q.css';
import '../../css/o/oa0nqmblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fg7wbkb5q"/><path class="r_fy1_94q"/><path class="oa0nqmblr"/></g>`,
		"fallback": "andrsrxn:screenshot-vertical",
	});
}

export default Component;
