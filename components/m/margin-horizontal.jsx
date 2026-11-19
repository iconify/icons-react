import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar9k4iy3i.css';
import '../../css/w/w868ilb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ar9k4iy3i"/><path class="w868ilb1l"/></g>`,
		"fallback": "andrsrxn:margin-horizontal",
	});
}

export default Component;
