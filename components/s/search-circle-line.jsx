import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8a84rxyw.css';
import '../../css/v/vc_bw3brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8a84rxyw"/><path class="vc_bw3brk"/></g>`,
		"fallback": "majesticons:search-circle-line",
	});
}

export default Component;
