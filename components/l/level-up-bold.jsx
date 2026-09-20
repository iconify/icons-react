import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7h6zc0to.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7h6zc0to"/>`,
		"fallback": "vaadin:level-up-bold",
	});
}

export default Component;
