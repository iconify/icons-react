import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-vsybbqd.css';
import '../../css/o/ole2e9mfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-vsybbqd"/><path class="ole2e9mfu"/></g>`,
		"fallback": "reicon:video-tick-filled",
	});
}

export default Component;
