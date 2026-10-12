import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwjwvcc-d.css';
import '../../css/p/pdhdtccrn.css';
import '../../css/t/t108gkb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 20.7 4.18)" class="mwjwvcc-d"/><rect transform="matrix(-1 0 0 1 20.7 4.18)" class="pdhdtccrn"/><path class="t108gkb5s"/></g>`,
		"fallback": "andrsrxn:text-firstline-right",
	});
}

export default Component;
