import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftuj6ccub.css';
import '../../css/e/enp8vng_y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ftuj6ccub"/><path class="enp8vng_y"/></g>`,
		"fallback": "pullo:rock-tall-duotone",
	});
}

export default Component;
