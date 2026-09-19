import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wrt2_ubbm.css';
import '../../css/n/ntwuq8chx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wrt2_ubbm"/><path class="ntwuq8chx"/></g>`,
		"fallback": "gg:phone",
	});
}

export default Component;
