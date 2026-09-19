import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ndikalbbb.css';
import '../../css/g/g1go2ybet.css';
import '../../css/q/qzv-r3bgv.css';
import '../../css/n/n4_wdtbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ndikalbbb"/><path class="g1go2ybet"/><path class="qzv-r3bgv"/><path class="n4_wdtbpo"/></g>`,
		"fallback": "hugeicons:pizza-01",
	});
}

export default Component;
