import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq2dfdcri.css';
import '../../css/o/onkmrb1ky.css';
import '../../css/g/g9qxn4b9s.css';
import '../../css/x/xc68_llyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dq2dfdcri"/><path class="onkmrb1ky"/><path class="g9qxn4b9s"/><path class="xc68_llyg"/></g>`,
		"fallback": "andrsrxn:sheets-sparkle",
	});
}

export default Component;
