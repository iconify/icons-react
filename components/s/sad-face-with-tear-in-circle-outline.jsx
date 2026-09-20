import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eio6mwq-e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eio6mwq-e"/>`,
		"fallback": "pinhead:sad-face-with-tear-in-circle-outline",
	});
}

export default Component;
