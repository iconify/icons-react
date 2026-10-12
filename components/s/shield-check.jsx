import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8gin_wvq.css';
import '../../css/v/vx27i8pya.css';
import '../../css/q/qbwmvc_ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8gin_wvq"/><path class="vx27i8pya"/><path class="qbwmvc_ha"/></g>`,
		"fallback": "andrsrxn:shield-check",
	});
}

export default Component;
