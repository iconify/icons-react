import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_xk9kz7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_xk9kz7b"/>`,
		"fallback": "ooui:text-dir-ltr",
	});
}

export default Component;
