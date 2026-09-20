import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmpxbib0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmpxbib0i"/>`,
		"fallback": "vaadin:pie-bar-chart",
	});
}

export default Component;
