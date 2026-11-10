import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfrl9_lhe.css';
import '../../css/e/e02s8ekqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vfrl9_lhe"/><path class="e02s8ekqr"/></g>`,
		"fallback": "andrsrxn:list-edit",
	});
}

export default Component;
