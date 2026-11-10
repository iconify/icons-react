import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxa9_fdae.css';
import '../../css/a/a1if1peoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nxa9_fdae"/><path class="a1if1peoa"/></g>`,
		"fallback": "andrsrxn:pin-off",
	});
}

export default Component;
