import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r7-1hnbno.css';
import '../../css/m/mhdh2_n-m.css';
import '../../css/n/n13p1fvkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r7-1hnbno"/><path class="mhdh2_n-m"/><path class="n13p1fvkh"/></g>`,
		"fallback": "hugeicons:mushroom",
	});
}

export default Component;
