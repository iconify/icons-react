import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1t-_-bte.css';
import '../../css/i/ig0ft87ib.css';
import '../../css/y/y-_ex5t9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1t-_-bte"/><path class="ig0ft87ib"/><path class="y-_ex5t9q"/></g>`,
		"fallback": "andrsrxn:terminal-square-sparkle",
	});
}

export default Component;
