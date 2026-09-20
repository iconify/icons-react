import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5sm3i20k.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5sm3i20k"/>`,
		"fallback": "memory:menu-right-fill",
	});
}

export default Component;
