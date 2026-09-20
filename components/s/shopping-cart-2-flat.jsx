import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o5qpa7b8y.css';
import '../../css/x/xyu-c9bgh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o5qpa7b8y"/><path class="xyu-c9bgh"/></g>`,
		"fallback": "streamline-color:shopping-cart-2-flat",
	});
}

export default Component;
