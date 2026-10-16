import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0i2a4bro.css';
import '../../css/l/lvo_-ccou.css';
import '../../css/x/x576usbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.3 21.3)" class="a0i2a4bro"/><rect transform="matrix(0 -1 -1 0 21.3 21.3)" class="lvo_-ccou"/><path class="x576usbkw"/></g>`,
		"fallback": "andrsrxn:terminal-square",
	});
}

export default Component;
