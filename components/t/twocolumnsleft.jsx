import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3q7fpbjt.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3q7fpbjt"/>`,
		"fallback": "whh:twocolumnsleft",
	});
}

export default Component;
