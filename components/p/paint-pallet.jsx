import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eomg5oe0j.css';
import '../../css/n/njcmzh3nb.css';
import '../../css/g/gg5y9t4ah.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eomg5oe0j"/><path class="njcmzh3nb"/><path clip-rule="evenodd" class="gg5y9t4ah"/></g>`,
		"fallback": "pepicons:paint-pallet",
	});
}

export default Component;
