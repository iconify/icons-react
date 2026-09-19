import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyen9wbhl.css';
import '../../css/r/rhgvw3brc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tyen9wbhl"/><path clip-rule="evenodd" class="rhgvw3brc"/></g>`,
		"fallback": "healthicons:urine-sample-outline",
	});
}

export default Component;
