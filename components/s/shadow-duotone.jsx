import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tond9muxw.css';
import '../../css/e/e832f9b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tond9muxw"/><path class="e832f9b0t primary"/></g>`,
		"fallback": "iconaut:shadow-duotone",
	});
}

export default Component;
