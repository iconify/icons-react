import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwnohqbpo.css';
import '../../css/h/h95g9d3ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pwnohqbpo"/><path class="h95g9d3ci"/></g>`,
		"fallback": "iconamoon:number-9-square",
	});
}

export default Component;
