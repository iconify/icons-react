import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cphovfb-u.css';
import '../../css/q/qop7gjbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cphovfb-u"/><path class="qop7gjbjf"/></g>`,
		"fallback": "andrsrxn:phone-check",
	});
}

export default Component;
