import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5z-4-bht.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5z-4-bht"/>`,
		"fallback": "oi:thumb-down",
	});
}

export default Component;
