import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3p6v5b5g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3p6v5b5g"/>`,
		"fallback": "garden:text-stroke-16",
	});
}

export default Component;
