import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5_bhwb0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5_bhwb0y"/>`,
		"fallback": "roentgen:tree-with-leaf",
	});
}

export default Component;
