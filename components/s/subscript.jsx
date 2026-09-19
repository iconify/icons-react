import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krven8k4z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krven8k4z"/>`,
		"fallback": "at-icons:subscript",
	});
}

export default Component;
