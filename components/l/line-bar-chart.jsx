import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3bv6j6bj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3bv6j6bj"/>`,
		"fallback": "vaadin:line-bar-chart",
	});
}

export default Component;
