import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tc74i0-rj.css';
import '../../css/l/lsl2mxbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tc74i0-rj"/><path class="lsl2mxbpl"/></g>`,
		"fallback": "andrsrxn:obelisk",
	});
}

export default Component;
