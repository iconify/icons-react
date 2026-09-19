import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws9c__bwv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws9c__bwv"/>`,
		"fallback": "bi:stopwatch-fill",
	});
}

export default Component;
