import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tprt89bde.css';
import '../../css/r/rdmt9rbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tprt89bde"/><path class="rdmt9rbrc"/></g>`,
		"fallback": "andrsrxn:text-paragraph-scan",
	});
}

export default Component;
