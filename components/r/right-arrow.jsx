import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz29c9t9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz29c9t9o"/>`,
		"fallback": "icons8:right-arrow",
	});
}

export default Component;
