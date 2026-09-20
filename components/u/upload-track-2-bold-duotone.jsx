import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n24h_0m1z.css';
import '../../css/u/uxwik3zjv.css';
import '../../css/y/ytqy4dbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n24h_0m1z"/><path class="uxwik3zjv"/><path class="ytqy4dbov"/></g>`,
		"fallback": "solar:upload-track-2-bold-duotone",
	});
}

export default Component;
