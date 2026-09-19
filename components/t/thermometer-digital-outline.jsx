import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ican9cc8i.css';
import '../../css/i/ikboynbwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ican9cc8i"/><path clip-rule="evenodd" class="ikboynbwg"/></g>`,
		"fallback": "healthicons:thermometer-digital-outline",
	});
}

export default Component;
