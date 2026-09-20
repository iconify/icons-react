import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejm67ybkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejm67ybkl"/>`,
		"fallback": "mingcute:letter-spacing-fill",
	});
}

export default Component;
