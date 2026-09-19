import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jwxtx5bpr.css';
import '../../css/m/m-byr7b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jwxtx5bpr"/><path class="m-byr7b4j"/></g>`,
		"fallback": "hugeicons:shoes",
	});
}

export default Component;
