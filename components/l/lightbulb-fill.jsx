import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ee4n1tw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ee4n1tw"/>`,
		"fallback": "bi:lightbulb-fill",
	});
}

export default Component;
