import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dcrqkdcfz.css';
import '../../css/k/k6ksygb0l.css';
import '../../css/q/qnulcf71m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="dcrqkdcfz"/><path class="k6ksygb0l"/><circle class="qnulcf71m"/></g>`,
		"fallback": "hugeicons:medal-07",
	});
}

export default Component;
