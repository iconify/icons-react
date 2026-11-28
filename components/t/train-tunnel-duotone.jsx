import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejh_-wbbd.css';
import '../../css/t/toaq29b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejh_-wbbd secondary"/><path class="primary toaq29b3f"/></g>`,
		"fallback": "iconaut:train-tunnel-duotone",
	});
}

export default Component;
