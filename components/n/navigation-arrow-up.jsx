import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikhn5z8rf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikhn5z8rf"/>`,
		"fallback": "pinhead:navigation-arrow-up",
	});
}

export default Component;
