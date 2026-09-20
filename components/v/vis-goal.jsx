import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1l5eab0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1l5eab0e"/>`,
		"fallback": "oui:vis-goal",
	});
}

export default Component;
