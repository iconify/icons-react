import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfm4bx-jp.css';
import '../../css/w/wk7lvbe9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mfm4bx-jp"/><path class="wk7lvbe9c"/></g>`,
		"fallback": "gg:log-off",
	});
}

export default Component;
