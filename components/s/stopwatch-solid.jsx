import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oni7yqb1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oni7yqb1b"/>`,
		"fallback": "la:stopwatch-solid",
	});
}

export default Component;
