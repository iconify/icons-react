import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1-r7x1oe.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1-r7x1oe"/>`,
		"fallback": "memory:toggle-switch-on",
	});
}

export default Component;
