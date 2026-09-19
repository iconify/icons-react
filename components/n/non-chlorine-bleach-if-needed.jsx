import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4xvk2bhh.css';

const viewBox = {"width":480,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4xvk2bhh"/>`,
		"fallback": "ps:non-chlorine-bleach-if-needed",
	});
}

export default Component;
