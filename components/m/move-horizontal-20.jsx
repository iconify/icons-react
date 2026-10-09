import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5zpafb6d.css';
import '../../css/y/y7i36sqce.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5zpafb6d"/><path class="y7i36sqce"/>`,
		"fallback": "energy-icons:move-horizontal-20",
	});
}

export default Component;
