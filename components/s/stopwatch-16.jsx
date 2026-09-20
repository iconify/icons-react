import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd5n43due.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd5n43due"/>`,
		"fallback": "octicon:stopwatch-16",
	});
}

export default Component;
