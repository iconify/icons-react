import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1yxm6bka.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1yxm6bka"/>`,
		"fallback": "rivet-icons:minus",
	});
}

export default Component;
