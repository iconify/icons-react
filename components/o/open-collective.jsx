import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evv2mmpyu.css';
import '../../css/u/u2410003a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="evv2mmpyu"/><path class="u2410003a"/></g>`,
		"fallback": "gg:open-collective",
	});
}

export default Component;
