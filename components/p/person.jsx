import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knbz9_b2z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knbz9_b2z"/>`,
		"fallback": "oi:person",
	});
}

export default Component;
