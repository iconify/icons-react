import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d71s9bpxk.css';
import '../../css/i/i55b91czr.css';
import '../../css/f/fcxaqr_kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d71s9bpxk"/><path class="i55b91czr"/><path class="fcxaqr_kh"/></g>`,
		"fallback": "solar:record-minimalistic-bold-duotone",
	});
}

export default Component;
