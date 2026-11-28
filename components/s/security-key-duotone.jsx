import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzw90evpj.css';
import '../../css/e/enwo95b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzw90evpj secondary"/><path class="enwo95b-h primary"/></g>`,
		"fallback": "iconaut:security-key-duotone",
	});
}

export default Component;
