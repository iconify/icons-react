import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofs9e3bxd.css';
import '../../css/l/lle7qubvx.css';
import '../../css/w/wfxpsyxhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ofs9e3bxd"/><path class="lle7qubvx"/><path class="wfxpsyxhd"/></g>`,
		"fallback": "andrsrxn:swipe",
	});
}

export default Component;
