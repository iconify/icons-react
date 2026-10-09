import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyn_k2bhz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyn_k2bhz"/>`,
		"fallback": "energy-icons:pause-20-bold",
	});
}

export default Component;
