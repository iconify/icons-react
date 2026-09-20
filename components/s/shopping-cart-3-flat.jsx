import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b-1dlw24j.css';
import '../../css/v/voss2kbuv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b-1dlw24j"/><path class="voss2kbuv"/></g>`,
		"fallback": "streamline-color:shopping-cart-3-flat",
	});
}

export default Component;
