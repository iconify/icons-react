import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6ts60vxy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6ts60vxy"/>`,
		"fallback": "vaadin:vaadin-h",
	});
}

export default Component;
