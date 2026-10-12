import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkgpuabln.css';
import '../../css/h/h4twkubrc.css';
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
		"content": `<g class="ft5dv1b6b"><path class="vkgpuabln"/><path class="h4twkubrc"/><circle transform="rotate(90 15.86 10.38)" class="o_w387zud"/><path class="qngonabpi"/></g>`,
		"fallback": "andrsrxn:piggy-bank",
	});
}

export default Component;
