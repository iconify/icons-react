import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e4vb3ebgu.css';
import '../../css/r/r-wxbbcrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e4vb3ebgu"/><path class="r-wxbbcrv"/></g>`,
		"fallback": "hugeicons:text-quote",
	});
}

export default Component;
