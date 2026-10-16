import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuac8wbht.css';
import '../../css/a/a1eqfi1lp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuac8wbht"/><path class="a1eqfi1lp"/>`,
		"fallback": "energy-icons:solar-lantern-20-bold",
	});
}

export default Component;
