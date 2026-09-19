import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxsdn3bat.css';
import '../../css/p/pf8p0_atx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rxsdn3bat"/><path class="pf8p0_atx"/></g>`,
		"fallback": "gg:shopping-cart",
	});
}

export default Component;
