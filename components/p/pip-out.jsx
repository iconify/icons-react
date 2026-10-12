import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq24tn0_x.css';
import '../../css/j/jri3emblp.css';
import '../../css/y/y3zi-eb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kq24tn0_x"/><rect class="jri3emblp"/><path class="y3zi-eb3g"/></g>`,
		"fallback": "andrsrxn:pip-out",
	});
}

export default Component;
