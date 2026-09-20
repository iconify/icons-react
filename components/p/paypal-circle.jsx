import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ml1y4kbmb.css';
import '../../css/l/lbikbg6og.css';
import '../../css/o/oasgoj2dk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ml1y4kbmb"/><path class="lbikbg6og"/><path class="oasgoj2dk"/></g>`,
		"fallback": "jam:paypal-circle",
	});
}

export default Component;
