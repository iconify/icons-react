import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2tucol5g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2tucol5g"/>`,
		"fallback": "at-icons:shopping-basket",
	});
}

export default Component;
