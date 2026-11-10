import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgm2dbcmz.css';
import '../../css/k/kg0_m5bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgm2dbcmz"/><path class="kg0_m5bhb"/></g>`,
		"fallback": "andrsrxn:split-horizontal",
	});
}

export default Component;
