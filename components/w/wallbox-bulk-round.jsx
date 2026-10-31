import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/opa6v-c1i.css';
import '../../css/k/k18y86g-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="opa6v-c1i"/><path class="k18y86g-z"/></g>`,
		"fallback": "coolicons:wallbox-bulk-round",
	});
}

export default Component;
