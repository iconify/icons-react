import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4jnmdp6q.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4jnmdp6q"/>`,
		"fallback": "fa-solid:thermometer-full",
	});
}

export default Component;
