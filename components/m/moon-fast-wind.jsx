import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lz4yjacke.css';
import '../../css/t/tktl3ccfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lz4yjacke"/><path class="tktl3ccfo"/></g>`,
		"fallback": "hugeicons:moon-fast-wind",
	});
}

export default Component;
