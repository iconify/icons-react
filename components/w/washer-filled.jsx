import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ug_skfbsy.css';
import '../../css/f/fwknfdbgo.css';
import '../../css/l/ledwm5bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ug_skfbsy"/><path class="fwknfdbgo"/><path clip-rule="evenodd" class="ledwm5bxp"/></g>`,
		"fallback": "reicon:washer-filled",
	});
}

export default Component;
