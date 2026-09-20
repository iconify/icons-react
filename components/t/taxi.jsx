import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5q0w7gwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5q0w7gwx"/>`,
		"fallback": "vaadin:taxi",
	});
}

export default Component;
