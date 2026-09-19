import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/reok9ub7k.css';
import '../../css/d/d2f_x3x6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="reok9ub7k"/><path class="d2f_x3x6d"/></g>`,
		"fallback": "hugeicons:task-remove-02",
	});
}

export default Component;
