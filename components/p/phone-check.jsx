import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_vdoy6ny.css';
import '../../css/d/d1ae-_bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_vdoy6ny"/><path class="d1ae-_bsd"/></g>`,
		"fallback": "andrsrxn:phone-check",
	});
}

export default Component;
