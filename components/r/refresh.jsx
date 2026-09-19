import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlhgx7bdi.css';
import '../../css/n/nx3hbtbfb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlhgx7bdi"/><path class="nx3hbtbfb"/>`,
		"fallback": "ei:refresh",
	});
}

export default Component;
