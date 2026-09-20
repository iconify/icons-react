import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8i-_-z1b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8i-_-z1b"/>`,
		"fallback": "memory:volume-medium",
	});
}

export default Component;
