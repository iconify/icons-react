import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bt--9eb0w.css';
import '../../css/h/hqgq3dbge.css';
import '../../css/h/hpi0ccblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bt--9eb0w wm-a"/><path class="hqgq3dbge"/><path class="hpi0ccblh wm-a"/></g>`,
		"fallback": "withicons:plug",
	});
}

export default Component;
