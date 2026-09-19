import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zj2x5idrr.css';
import '../../css/l/lxen9-max.css';
import '../../css/e/e1pt3ydbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zj2x5idrr"/><path class="lxen9-max"/><path class="e1pt3ydbo"/></g>`,
		"fallback": "iconoir:square-3d-three-points",
	});
}

export default Component;
