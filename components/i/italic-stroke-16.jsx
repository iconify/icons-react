import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6ngt0_3n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6ngt0_3n"/>`,
		"fallback": "garden:italic-stroke-16",
	});
}

export default Component;
