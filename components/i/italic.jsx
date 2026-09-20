import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9cn8b7_k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9cn8b7_k"/>`,
		"fallback": "vaadin:italic",
	});
}

export default Component;
