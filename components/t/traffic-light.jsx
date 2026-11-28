import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y0rv1kwqt.css';
import '../../css/b/bs1k_ybmr.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/j/jg7up-bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y0rv1kwqt"/><path class="bs1k_ybmr"/><path class="zrlh-6b7n"/><path class="jg7up-bsc"/></g>`,
		"fallback": "iconaut:traffic-light",
	});
}

export default Component;
