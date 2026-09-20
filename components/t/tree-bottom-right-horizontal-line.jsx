import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlrndbbwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlrndbbwj"/>`,
		"fallback": "roentgen:tree-bottom-right-horizontal-line",
	});
}

export default Component;
