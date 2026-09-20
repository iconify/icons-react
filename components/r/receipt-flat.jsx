import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rm0pfvbgp.css';
import '../../css/c/c2okh_bcm.css';
import '../../css/y/yi1r2aben.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rm0pfvbgp"/><path clip-rule="evenodd" class="c2okh_bcm"/><path class="yi1r2aben"/></g>`,
		"fallback": "streamline-color:receipt-flat",
	});
}

export default Component;
