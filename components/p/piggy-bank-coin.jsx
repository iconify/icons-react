import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifgbisb2q.css';
import '../../css/v/vkgpuabln.css';
import '../../css/a/aiynaebqv.css';
import '../../css/o/o_w387zud.css';
import '../../css/q/qngonabpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifgbisb2q"/><path class="vkgpuabln"/><path class="aiynaebqv"/><circle class="o_w387zud"/><path class="qngonabpi"/></g>`,
		"fallback": "andrsrxn:piggy-bank-coin",
	});
}

export default Component;
