import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yez44b7jj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yez44b7jj"/>`,
		"fallback": "bi:volume-down",
	});
}

export default Component;
