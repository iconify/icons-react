import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qufl3u74v.css';
import '../../css/f/f3bx1zbww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qufl3u74v"/><path class="f3bx1zbww"/></g>`,
		"fallback": "streamline-color:shopping-cart-check-flat",
	});
}

export default Component;
