import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe2i10slb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe2i10slb"/>`,
		"fallback": "energy-icons:trapezoid-20-bold",
	});
}

export default Component;
