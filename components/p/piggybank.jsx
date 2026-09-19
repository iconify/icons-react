import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_xpt-d8k.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_xpt-d8k"/>`,
		"fallback": "whh:piggybank",
	});
}

export default Component;
