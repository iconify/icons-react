import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an_vu3bin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an_vu3bin"/>`,
		"fallback": "roentgen:ticket",
	});
}

export default Component;
