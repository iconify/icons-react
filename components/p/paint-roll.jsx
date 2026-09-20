import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss1lqj77n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss1lqj77n"/>`,
		"fallback": "vaadin:paint-roll",
	});
}

export default Component;
