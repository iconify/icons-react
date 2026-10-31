import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayqmm26lp.css';
import '../../css/o/obs5sfbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayqmm26lp"/><path class="obs5sfbko"/></g>`,
		"fallback": "coolicons:luggage-bulk-round",
	});
}

export default Component;
