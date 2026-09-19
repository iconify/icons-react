import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a4y1xi-kg.css';
import '../../css/c/c1kr35p1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a4y1xi-kg"/><path class="c1kr35p1w"/></g>`,
		"fallback": "hugeicons:voice-id",
	});
}

export default Component;
