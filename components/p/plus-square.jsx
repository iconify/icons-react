import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y14qgdb3u.css';
import '../../css/o/ow8c8qbsq.css';
import '../../css/w/wf45hab5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.34)scale(-1 1)" class="y14qgdb3u"/><path class="ow8c8qbsq"/><rect transform="rotate(90 0 21.34)scale(-1 1)" class="wf45hab5t"/></g>`,
		"fallback": "andrsrxn:plus-square",
	});
}

export default Component;
