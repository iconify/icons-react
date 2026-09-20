import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e56w4s-6j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e56w4s-6j"/>`,
		"fallback": "roentgen:spray-can",
	});
}

export default Component;
