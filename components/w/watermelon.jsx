import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pf79bwvob.css';
import '../../css/x/x9egwm5zf.css';
import '../../css/k/kq87cibro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pf79bwvob"/><path class="x9egwm5zf"/><path class="kq87cibro"/></g>`,
		"fallback": "andrsrxn:watermelon",
	});
}

export default Component;
