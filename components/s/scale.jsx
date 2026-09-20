import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zq39qrbas.css';
import '../../css/q/qp0tnpi4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zq39qrbas"/><path class="qp0tnpi4p"/></g>`,
		"fallback": "reicon:scale",
	});
}

export default Component;
