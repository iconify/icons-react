import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kqvsheh7z.css';
import '../../css/i/i036dddnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kqvsheh7z"/><path class="i036dddnr"/></g>`,
		"fallback": "hugeicons:star-off",
	});
}

export default Component;
