import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uay64kd_o.css';
import '../../css/h/h1bkggb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uay64kd_o"/><path clip-rule="evenodd" class="h1bkggb5h"/></g>`,
		"fallback": "nrk:radio-solid-expressive",
	});
}

export default Component;
