import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoq68sbbm.css';
import '../../css/f/far0_obfx.css';
import '../../css/p/p01z8bgne.css';
import '../../css/k/ktsg6rbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zoq68sbbm"/><path class="far0_obfx"/><path class="p01z8bgne"/><path class="ktsg6rbdw"/></g>`,
		"fallback": "andrsrxn:keyboard-numeric",
	});
}

export default Component;
