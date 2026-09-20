import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc-_-yb4c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc-_-yb4c"/>`,
		"fallback": "streamline-color:spades-symbol-flat",
	});
}

export default Component;
