import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b-1dlw24j.css';
import '../../css/h/hd7jk0b4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b-1dlw24j"/><path class="hd7jk0b4h"/></g>`,
		"fallback": "streamline-color:shopping-cart-1-flat",
	});
}

export default Component;
