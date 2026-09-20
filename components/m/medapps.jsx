import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq6x1vb6r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq6x1vb6r"/>`,
		"fallback": "la:medapps",
	});
}

export default Component;
