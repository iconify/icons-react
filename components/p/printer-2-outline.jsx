import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bqz11nb9t.css';
import '../../css/m/mwm_eqbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bqz11nb9t"/><path class="mwm_eqbqh"/></g>`,
		"fallback": "solar:printer-2-outline",
	});
}

export default Component;
