import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rm0pfvbgp.css';
import '../../css/u/uiksm4b9u.css';
import '../../css/y/yi1r2aben.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rm0pfvbgp"/><path clip-rule="evenodd" class="uiksm4b9u"/><path class="yi1r2aben"/></g>`,
		"fallback": "streamline-color:receipt-add-flat",
	});
}

export default Component;
