import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bym7egbdg.css';
import '../../css/k/kkjprgnuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bym7egbdg secondary"/><path class="kkjprgnuh primary"/></g>`,
		"fallback": "iconaut:log-in-duotone",
	});
}

export default Component;
