import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j--35ya-s.css';
import '../../css/k/ka39gdb_u.css';
import '../../css/w/wfttsob6c.css';
import '../../css/x/xijrthbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j--35ya-s"/><path class="ka39gdb_u"/><path class="wfttsob6c"/><path class="xijrthbvt"/></g>`,
		"fallback": "andrsrxn:link-connect-off",
	});
}

export default Component;
