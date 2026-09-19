import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eagmweb9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eagmweb9k"/>`,
		"fallback": "ion:md-keypad",
	});
}

export default Component;
