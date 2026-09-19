import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0sygjdrl.css';
import '../../css/m/mrp-3d66j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a0sygjdrl"/><path class="mrp-3d66j"/></g>`,
		"fallback": "hugeicons:laptop-performance",
	});
}

export default Component;
