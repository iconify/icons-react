import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0yb8abpz.css';
import '../../css/w/weuorgbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0yb8abpz"/><path clip-rule="evenodd" class="weuorgbpd"/></g>`,
		"fallback": "andrsrxn:lock-scan",
	});
}

export default Component;
