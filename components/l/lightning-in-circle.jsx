import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut17l-b_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut17l-b_x"/>`,
		"fallback": "at-icons:lightning-in-circle",
	});
}

export default Component;
