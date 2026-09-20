import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ei2ht8bsv.css';
import '../../css/d/dp1n3q8en.css';
import '../../css/u/uv3cblu-e.css';
import '../../css/q/q8wvpccph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ei2ht8bsv"/><path class="dp1n3q8en"/><path class="uv3cblu-e"/><path class="q8wvpccph"/></g>`,
		"fallback": "solar:sd-card-bold-duotone",
	});
}

export default Component;
