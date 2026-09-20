import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg07ajpns.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg07ajpns"/>`,
		"fallback": "vaadin:thumbs-up",
	});
}

export default Component;
