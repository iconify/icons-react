import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vtj_j0y2e.css';
import '../../css/g/g4zs08s-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vtj_j0y2e"/><path class="g4zs08s-q"/></g>`,
		"fallback": "hugeicons:two-circle",
	});
}

export default Component;
