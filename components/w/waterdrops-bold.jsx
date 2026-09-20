import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qoxqhd7xn.css';
import '../../css/k/kdwsm_job.css';
import '../../css/z/z1yj6sbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qoxqhd7xn"/><path class="kdwsm_job"/><path class="z1yj6sbtc"/></g>`,
		"fallback": "solar:waterdrops-bold",
	});
}

export default Component;
