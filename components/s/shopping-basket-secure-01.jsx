import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a990b_dhc.css';
import '../../css/p/pqlryqmlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a990b_dhc"/><path class="pqlryqmlg"/></g>`,
		"fallback": "hugeicons:shopping-basket-secure-01",
	});
}

export default Component;
