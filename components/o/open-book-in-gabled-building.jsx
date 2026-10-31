import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb4f1fz8e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb4f1fz8e"/>`,
		"fallback": "pinhead:open-book-in-gabled-building",
	});
}

export default Component;
