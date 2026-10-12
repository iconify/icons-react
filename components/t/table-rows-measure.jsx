import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjx-zfbwj.css';
import '../../css/e/e3ahb7b0n.css';
import '../../css/x/xuv0msuzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kjx-zfbwj"/><rect transform="matrix(0 -1 -1 0 21.24 14.9)" class="e3ahb7b0n"/><path class="xuv0msuzw"/></g>`,
		"fallback": "andrsrxn:table-rows-measure",
	});
}

export default Component;
