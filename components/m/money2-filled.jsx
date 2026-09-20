import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/guewfbcxi.css';
import '../../css/q/qprvy862v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="guewfbcxi"/><path class="qprvy862v"/></g>`,
		"fallback": "reicon:money2-filled",
	});
}

export default Component;
