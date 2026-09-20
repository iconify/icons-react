import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urd7awfvu.css';
import '../../css/t/tyjba4b7k.css';
import '../../css/x/xt80u9-4p.css';
import '../../css/q/qr22n-b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="urd7awfvu"/><path class="tyjba4b7k"/><path class="xt80u9-4p"/><path class="qr22n-b8a"/></g>`,
		"fallback": "solar:table-cells-split-bold",
	});
}

export default Component;
