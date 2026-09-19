import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qq9arkr4u.css';
import '../../css/k/kc_3u6o4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qq9arkr4u"/><path class="kc_3u6o4r"/></g>`,
		"fallback": "hugeicons:waterfall-up-01",
	});
}

export default Component;
