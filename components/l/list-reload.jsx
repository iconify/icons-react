import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekk465_ba.css';
import '../../css/x/xj2yxnv2q.css';
import '../../css/j/j45xv0bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekk465_ba"/><path class="xj2yxnv2q"/><path clip-rule="evenodd" class="j45xv0bsc"/></g>`,
		"fallback": "andrsrxn:list-reload",
	});
}

export default Component;
