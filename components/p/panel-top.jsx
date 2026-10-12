import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0wwl_seq.css';
import '../../css/w/whe3ncbgg.css';
import '../../css/w/wl244pxpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.28 9.35)" class="c0wwl_seq"/><rect transform="rotate(90 0 21.27)scale(-1 1)" class="whe3ncbgg"/><path class="wl244pxpq"/></g>`,
		"fallback": "andrsrxn:panel-top",
	});
}

export default Component;
