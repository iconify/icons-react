import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tui3x3bgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tui3x3bgd"/>`,
		"fallback": "carbon:text-indent-more",
	});
}

export default Component;
