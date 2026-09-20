import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yu1_o3_xh.css';
import '../../css/n/n_zv-y8ay.css';
import '../../css/g/g792fsber.css';
import '../../css/o/o3645715n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yu1_o3_xh"/><path class="n_zv-y8ay"/><path class="g792fsber"/><path class="o3645715n"/></g>`,
		"fallback": "pixelarticons:settings-cog-2",
	});
}

export default Component;
