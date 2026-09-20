import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1mn4yb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1mn4yb0k"/>`,
		"fallback": "majesticons:laptop",
	});
}

export default Component;
