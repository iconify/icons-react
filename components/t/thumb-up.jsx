import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-qh6iddv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-qh6iddv"/>`,
		"fallback": "oi:thumb-up",
	});
}

export default Component;
