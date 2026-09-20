import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j04ijnb3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j04ijnb3o"/>`,
		"fallback": "roentgen:p-arrow-up",
	});
}

export default Component;
