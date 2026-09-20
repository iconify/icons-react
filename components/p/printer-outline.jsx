import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwm_eqbqh.css';
import '../../css/u/uaxqbhbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mwm_eqbqh"/><path clip-rule="evenodd" class="uaxqbhbyu"/></g>`,
		"fallback": "solar:printer-outline",
	});
}

export default Component;
