import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ouk6zs8cw.css';
import '../../css/u/u0_8wb5zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ouk6zs8cw"/><path class="u0_8wb5zi"/></g>`,
		"fallback": "hugeicons:notification-square",
	});
}

export default Component;
