import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/g15hotpdm.css';
import '../../css/p/p3_pn4bsu.css';
import '../../css/n/ndmfafbdz.css';
import '../../css/y/yf3xdmner.css';
import '../../css/a/a5nux7r8j.css';
import '../../css/w/w94m-7b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUdsh5bGJ" x1="10.01" x2="14.01" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="g15hotpdm wm-k"/><path class="p3_pn4bsu wm-k"/><path fill="url(#SVGUdsh5bGJ)" class="ndmfafbdz wm-k"/><path class="wm-shadow yf3xdmner"/><path class="a5nux7r8j wm-shine"/><path class="w94m-7b8k wm-shine"/></g>`,
		"fallback": "withicons-valentine:picture-in-picture",
	});
}

export default Component;
