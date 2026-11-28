import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufkhedn_p.css';
import '../../css/a/acao731-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ufkhedn_p"/><path class="acao731-j primary"/></g>`,
		"fallback": "iconaut:rotate-cw-duotone",
	});
}

export default Component;
