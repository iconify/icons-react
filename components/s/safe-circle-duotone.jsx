import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdporxbhj.css';
import '../../css/s/su5o26efx.css';
import '../../css/q/q2mo-wyvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mdporxbhj"/><path clip-rule="evenodd" class="su5o26efx"/><path class="q2mo-wyvn"/></g>`,
		"fallback": "reicon:safe-circle-duotone",
	});
}

export default Component;
