import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ryluzc2qx.css';
import '../../css/k/k8_y8zb6l.css';
import '../../css/h/hsetly8ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ryluzc2qx"/><path class="k8_y8zb6l"/><path class="hsetly8ov"/></g>`,
		"fallback": "solar:three-squares-bold",
	});
}

export default Component;
