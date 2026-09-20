import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_1mfxjgr.css';
import '../../css/c/cya7wpbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_1mfxjgr"/><path clip-rule="evenodd" class="cya7wpbnw"/></g>`,
		"fallback": "reicon:send-clock-filled",
	});
}

export default Component;
