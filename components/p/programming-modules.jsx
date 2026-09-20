import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejl9gt84u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejl9gt84u"/>`,
		"fallback": "streamline-block:programming-modules",
	});
}

export default Component;
