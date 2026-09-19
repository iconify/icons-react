import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cik5cbb7a.css';
import '../../css/p/pken422_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cik5cbb7a"/><path class="pken422_c"/></g>`,
		"fallback": "healthicons:water-sanitation2x-outline",
	});
}

export default Component;
