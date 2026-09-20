import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkn2g0boi.css';
import '../../css/l/lb5ag38hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xkn2g0boi"/><path class="lb5ag38hi"/></g>`,
		"fallback": "reicon:virus-filled",
	});
}

export default Component;
