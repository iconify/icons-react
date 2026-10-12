import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1pxunpbj.css';
import '../../css/g/girf9zbcy.css';
import '../../css/p/p74anlbhw.css';
import '../../css/u/uob6ktbab.css';
import '../../css/z/z2955k29e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1pxunpbj"/><path class="girf9zbcy"/><path class="p74anlbhw"/><rect class="uob6ktbab"/><path class="z2955k29e"/></g>`,
		"fallback": "andrsrxn:mail-lock",
	});
}

export default Component;
