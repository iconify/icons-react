import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q_m2gy00p.css';
import '../../css/o/okqyo3pdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q_m2gy00p"/><path class="okqyo3pdi"/></g>`,
		"fallback": "hugeicons:redo-03",
	});
}

export default Component;
