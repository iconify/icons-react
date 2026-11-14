import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9y6adcht.css';
import '../../css/e/e5qdz8_wp.css';
import '../../css/l/l4pq8dbwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9y6adcht"/><path class="e5qdz8_wp"/><path class="l4pq8dbwm"/>`,
		"fallback": "selfhst:tandoor-recipes-dark",
	});
}

export default Component;
