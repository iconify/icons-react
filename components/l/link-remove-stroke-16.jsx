import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9n7qsxsi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9n7qsxsi"/>`,
		"fallback": "garden:link-remove-stroke-16",
	});
}

export default Component;
