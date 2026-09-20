import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/s/s2aoekblk.css';
import '../../css/y/yj1pvk2lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="s2aoekblk"/><path class="yj1pvk2lp"/></g>`,
		"fallback": "tabler:shopping-cart-exclamation",
	});
}

export default Component;
