import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvvhqn41i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvvhqn41i"/>`,
		"fallback": "raphael:ticket",
	});
}

export default Component;
