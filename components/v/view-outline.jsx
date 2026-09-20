import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2p-8wbtt.css';
import '../../css/k/kujpmsktd.css';
import '../../css/h/h0ghu0bkc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w2p-8wbtt"><path class="kujpmsktd"/><path class="h0ghu0bkc"/></g>`,
		"fallback": "lsicon:view-outline",
	});
}

export default Component;
