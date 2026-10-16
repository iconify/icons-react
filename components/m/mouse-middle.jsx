import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzqr7-3bp.css';
import '../../css/l/l-5wxeyst.css';
import '../../css/f/fux-f_bmp.css';
import '../../css/d/d6ek-x1th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzqr7-3bp"/><path class="l-5wxeyst"/><rect transform="matrix(-1 0 0 1 14.31 6.38)" class="fux-f_bmp"/><path class="d6ek-x1th"/></g>`,
		"fallback": "andrsrxn:mouse-middle",
	});
}

export default Component;
