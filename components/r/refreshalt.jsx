import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_lt4yb4w.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_lt4yb4w"/>`,
		"fallback": "whh:refreshalt",
	});
}

export default Component;
