import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vutc8zb9c.css';
import '../../css/e/el0rrrluf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vutc8zb9c"/><path class="el0rrrluf"/>`,
		"fallback": "vaadin:user-star",
	});
}

export default Component;
