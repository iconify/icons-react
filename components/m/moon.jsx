import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di4rr1_9d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di4rr1_9d"/>`,
		"fallback": "vaadin:moon",
	});
}

export default Component;
