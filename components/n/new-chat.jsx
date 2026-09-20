import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbd3n5_5i.css';
import '../../css/q/qq-eglbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbd3n5_5i"/><path clip-rule="evenodd" class="qq-eglbwn"/></g>`,
		"fallback": "nrk:new-chat",
	});
}

export default Component;
