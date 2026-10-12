import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh28f4bjr.css';
import '../../css/o/oilvdzb-w.css';
import '../../css/t/ts61_grap.css';
import '../../css/v/v8vm98b1d.css';
import '../../css/s/sf6q-jbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh28f4bjr"/><path class="oilvdzb-w"/><path class="ts61_grap"/><path class="v8vm98b1d"/><path class="sf6q-jbaz"/></g>`,
		"fallback": "andrsrxn:tags",
	});
}

export default Component;
