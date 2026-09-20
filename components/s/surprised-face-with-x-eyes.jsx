import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j87ilt-jn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j87ilt-jn"/>`,
		"fallback": "pinhead:surprised-face-with-x-eyes",
	});
}

export default Component;
