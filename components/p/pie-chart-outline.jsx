import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lzfl6dbpr.css';
import '../../css/i/i81swrbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lzfl6dbpr"/><path class="i81swrbmc"/></g>`,
		"fallback": "bitcoin-icons:pie-chart-outline",
	});
}

export default Component;
