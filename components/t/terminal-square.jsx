import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he2jp2bcu.css';
import '../../css/e/ec_j2vsfx.css';
import '../../css/x/x576usbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="he2jp2bcu"/><path class="ec_j2vsfx"/><path class="x576usbkw"/></g>`,
		"fallback": "andrsrxn:terminal-square",
	});
}

export default Component;
