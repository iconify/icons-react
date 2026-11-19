import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh0fdxcre.css';
import '../../css/f/fn2hy8bgw.css';
import '../../css/s/s2ma_eydx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wh0fdxcre"/><path class="fn2hy8bgw"/><path class="s2ma_eydx"/></g>`,
		"fallback": "andrsrxn:vga-port",
	});
}

export default Component;
