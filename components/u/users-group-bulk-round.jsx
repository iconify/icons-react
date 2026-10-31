import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rsjb93zlw.css';
import '../../css/h/hp2z-wtnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rsjb93zlw"/><path class="hp2z-wtnr"/></g>`,
		"fallback": "coolicons:users-group-bulk-round",
	});
}

export default Component;
