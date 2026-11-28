import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkza26tve.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkza26tve"/>`,
		"fallback": "pullo:satellite-dish-fill",
	});
}

export default Component;
