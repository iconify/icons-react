import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vq8-hu_1o.css';
import '../../css/b/b581idbbf.css';
import '../../css/o/ozst3gb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vq8-hu_1o"/><path class="b581idbbf"/><circle transform="rotate(-45 8.607 8.879)" class="ozst3gb1r"/></g>`,
		"fallback": "solar:tag-price-linear",
	});
}

export default Component;
