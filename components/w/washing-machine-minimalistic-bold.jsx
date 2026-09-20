import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5oldil6k.css';
import '../../css/l/li-q97bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5oldil6k"/><path clip-rule="evenodd" class="li-q97bpx"/></g>`,
		"fallback": "solar:washing-machine-minimalistic-bold",
	});
}

export default Component;
