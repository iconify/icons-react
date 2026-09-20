import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1dnv6dph.css';
import '../../css/b/b5b7d6bal.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z1dnv6dph"/><path class="b5b7d6bal"/></g>`,
		"fallback": "streamline-color:shopping-cart-3",
	});
}

export default Component;
