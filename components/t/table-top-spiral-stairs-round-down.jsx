import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epjs85bbb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epjs85bbb"/>`,
		"fallback": "memory:table-top-spiral-stairs-round-down",
	});
}

export default Component;
