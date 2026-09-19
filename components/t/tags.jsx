import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brjq7rk_r.css';

const viewBox = {"width":1025,"height":895};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brjq7rk_r"/>`,
		"fallback": "whh:tags",
	});
}

export default Component;
