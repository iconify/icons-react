import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ksvx0n4ii.css';
import '../../css/z/zfuqglb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ksvx0n4ii"/><path class="zfuqglb0w"/></g>`,
		"fallback": "hugeicons:mobile-protection",
	});
}

export default Component;
