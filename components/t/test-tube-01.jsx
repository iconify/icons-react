import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ninu-1bxu.css';
import '../../css/p/p3uy-bbpn.css';
import '../../css/s/sgxyf4b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ninu-1bxu"/><path class="p3uy-bbpn"/><path class="sgxyf4b_g"/></g>`,
		"fallback": "hugeicons:test-tube-01",
	});
}

export default Component;
