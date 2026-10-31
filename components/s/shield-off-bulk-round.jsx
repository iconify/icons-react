import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mp-ry4jnc.css';
import '../../css/l/lk3mfzb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mp-ry4jnc"/><path class="lk3mfzb5t"/></g>`,
		"fallback": "coolicons:shield-off-bulk-round",
	});
}

export default Component;
