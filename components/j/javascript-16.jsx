import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyvjpm-mu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyvjpm-mu"/>`,
		"fallback": "nonicons:javascript-16",
	});
}

export default Component;
