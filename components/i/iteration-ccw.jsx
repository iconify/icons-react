import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vevogyb6t.css';
import '../../css/k/k40_1zb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vevogyb6t"/><path class="k40_1zb6j"/></g>`,
		"fallback": "hugeicons:iteration-ccw",
	});
}

export default Component;
