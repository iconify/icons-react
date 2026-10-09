import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbfuulb_v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbfuulb_v"/>`,
		"fallback": "energy-icons:power-off-20-bold",
	});
}

export default Component;
