import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pk2f36bju.css';
import '../../css/v/vp388fb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pk2f36bju"/><path class="vp388fb4x"/></g>`,
		"fallback": "hugeicons:link-03",
	});
}

export default Component;
