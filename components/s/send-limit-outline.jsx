import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qf6757bna.css';
import '../../css/b/bvdfp-bfv.css';
import '../../css/i/i9cp4bbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="qf6757bna"/><circle class="bvdfp-bfv"/><path class="i9cp4bbah"/></g>`,
		"fallback": "bitcoin-icons:send-limit-outline",
	});
}

export default Component;
