import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zb2kedx8a.css';
import '../../css/t/tgy-uobvr.css';
import '../../css/d/d3fduibuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zb2kedx8a"/><path class="tgy-uobvr"/><path class="d3fduibuj"/></g>`,
		"fallback": "solar:user-circle-bold-duotone",
	});
}

export default Component;
