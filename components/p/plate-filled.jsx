import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wc4hlc93o.css';
import '../../css/x/xgc6elbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wc4hlc93o"/><path clip-rule="evenodd" class="xgc6elbeb"/></g>`,
		"fallback": "reicon:plate-filled",
	});
}

export default Component;
