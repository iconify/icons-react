import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzdvjibtc.css';
import '../../css/a/ax7ex0bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzdvjibtc"/><path clip-rule="evenodd" class="ax7ex0bdz"/></g>`,
		"fallback": "reicon:to-pip-filled",
	});
}

export default Component;
