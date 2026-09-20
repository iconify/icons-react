import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ut8cuhtwq.css';
import '../../css/k/kbs4yj5cx.css';
import '../../css/n/nzciehbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ut8cuhtwq"/><path class="kbs4yj5cx"/><path class="nzciehbug"/></g>`,
		"fallback": "reicon:wallet3-filled",
	});
}

export default Component;
