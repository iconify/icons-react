import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frvs39b5t.css';
import '../../css/k/k5ikzyb2n.css';
import '../../css/b/bv162rb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="frvs39b5t"/><path class="k5ikzyb2n"/><path class="bv162rb1m"/></g>`,
		"fallback": "solar:traffic-economy-outline",
	});
}

export default Component;
