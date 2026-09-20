import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_n-lsb4d.css';
import '../../css/t/tpngthz3k.css';
import '../../css/i/ibj2xggkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_n-lsb4d"/><path class="tpngthz3k"/><path clip-rule="evenodd" class="ibj2xggkh"/></g>`,
		"fallback": "solar:shield-warning-outline",
	});
}

export default Component;
