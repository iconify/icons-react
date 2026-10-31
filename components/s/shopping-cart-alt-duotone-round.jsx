import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swmvc4_nc.css';
import '../../css/d/dfo2t1e6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swmvc4_nc"/><path class="dfo2t1e6b"/></g>`,
		"fallback": "coolicons:shopping-cart-alt-duotone-round",
	});
}

export default Component;
