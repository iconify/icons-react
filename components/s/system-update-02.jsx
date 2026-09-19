import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u1xashbhl.css';
import '../../css/j/j79jdxkxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u1xashbhl"/><path class="j79jdxkxx"/></g>`,
		"fallback": "hugeicons:system-update-02",
	});
}

export default Component;
