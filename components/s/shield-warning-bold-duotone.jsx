import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/am0-j8lcc.css';
import '../../css/g/g_n-lsb4d.css';
import '../../css/t/tpngthz3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="am0-j8lcc"/><path class="g_n-lsb4d"/><path class="tpngthz3k"/></g>`,
		"fallback": "solar:shield-warning-bold-duotone",
	});
}

export default Component;
