import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/urhi_s55q.css';
import '../../css/b/b_wp_jynk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="urhi_s55q"/><path class="b_wp_jynk"/></g>`,
		"fallback": "hugeicons:shopping-basket-check-in-03",
	});
}

export default Component;
