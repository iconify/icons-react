import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q41j21btl.css';
import '../../css/u/uz9bb11ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q41j21btl"/><path class="uz9bb11ky"/></g>`,
		"fallback": "reicon:ufo3-filled",
	});
}

export default Component;
