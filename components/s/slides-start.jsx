import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujbm2nbpq.css';
import '../../css/z/z3jzsobqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujbm2nbpq"/><path class="z3jzsobqz"/></g>`,
		"fallback": "andrsrxn:slides-start",
	});
}

export default Component;
