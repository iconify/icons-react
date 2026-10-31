import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwxsbkybu.css';
import '../../css/g/gqa6br3jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwxsbkybu"/><path class="gqa6br3jy"/></g>`,
		"fallback": "coolicons:shopping-cart-alt-bulk-round",
	});
}

export default Component;
