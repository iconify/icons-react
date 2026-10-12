import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cphovfb-u.css';
import '../../css/h/h_0w9q0fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cphovfb-u"/><path class="h_0w9q0fv"/></g>`,
		"fallback": "andrsrxn:phone-pause",
	});
}

export default Component;
