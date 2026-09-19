import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd8a0qbae.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd8a0qbae"/>`,
		"fallback": "bi:node-minus-fill",
	});
}

export default Component;
