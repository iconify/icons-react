import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_vdoy6ny.css';
import '../../css/y/yw8ihcc8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_vdoy6ny"/><path class="yw8ihcc8u"/></g>`,
		"fallback": "andrsrxn:phone-pause",
	});
}

export default Component;
