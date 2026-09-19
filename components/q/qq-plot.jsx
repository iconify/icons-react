import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lb7nvhz5k.css';
import '../../css/e/e2wyyjb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lb7nvhz5k"/><path class="e2wyyjb0l"/></g>`,
		"fallback": "hugeicons:qq-plot",
	});
}

export default Component;
