import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx4k27b3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx4k27b3e"/>`,
		"fallback": "garden:overflow-vertical-stroke-16",
	});
}

export default Component;
