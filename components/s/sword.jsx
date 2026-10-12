import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7vpjpnff.css';
import '../../css/i/i44887cfx.css';
import '../../css/q/qwwflebai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7vpjpnff"/><path class="i44887cfx"/><path class="qwwflebai"/></g>`,
		"fallback": "andrsrxn:sword",
	});
}

export default Component;
