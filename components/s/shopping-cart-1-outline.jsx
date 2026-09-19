import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w9w0yfbur.css';
import '../../css/h/hbwg8bb1j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w9w0yfbur"/><path class="hbwg8bb1j"/></g>`,
		"fallback": "glyphs:shopping-cart-1-outline",
	});
}

export default Component;
