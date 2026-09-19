import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9cc2n58k.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9cc2n58k"/>`,
		"fallback": "whh:textheight",
	});
}

export default Component;
