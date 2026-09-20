import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7ktpdbzc.css';
import '../../css/h/huo4mrudt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s7ktpdbzc"/><path class="huo4mrudt"/></g>`,
		"fallback": "reicon:skateboard-filled",
	});
}

export default Component;
