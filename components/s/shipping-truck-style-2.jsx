import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/e/e0n6efpsm.css';
import '../../css/r/r5npsgh8x.css';
import '../../css/z/zlncnbcob.css';
import '../../css/q/qabhj6b6n.css';
import '../../css/l/ly666vgrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="e0n6efpsm"/><path class="r5npsgh8x"/><path class="zlncnbcob"/><path class="qabhj6b6n"/><path class="ly666vgrh"/></g>`,
		"fallback": "streamline-ultimate:shipping-truck-style-2",
	});
}

export default Component;
