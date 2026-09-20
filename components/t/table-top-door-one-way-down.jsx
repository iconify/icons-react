import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczd56bbf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tczd56bbf"/>`,
		"fallback": "memory:table-top-door-one-way-down",
	});
}

export default Component;
