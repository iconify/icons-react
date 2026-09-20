import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oz-bic4ri.css';
import '../../css/n/np8hs5bqz.css';
import '../../css/e/esbwh55ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oz-bic4ri"/><path clip-rule="evenodd" class="np8hs5bqz"/><path class="esbwh55ly"/></g>`,
		"fallback": "solar:safe-circle-bold-duotone",
	});
}

export default Component;
