import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cry053b_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cry053b_r"/>`,
		"fallback": "vaadin:piggy-bank",
	});
}

export default Component;
