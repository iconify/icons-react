import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rm0pfvbgp.css';
import '../../css/y/yi1r2aben.css';
import '../../css/f/fztdrbb0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rm0pfvbgp"/><path class="yi1r2aben"/><path clip-rule="evenodd" class="fztdrbb0v"/></g>`,
		"fallback": "streamline-color:receipt-subtract-flat",
	});
}

export default Component;
