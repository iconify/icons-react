import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u0_8wb5zi.css';
import '../../css/m/m8ndrsb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u0_8wb5zi"/><path class="m8ndrsb9s"/></g>`,
		"fallback": "hugeicons:notification-circle",
	});
}

export default Component;
