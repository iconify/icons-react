import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cd0-zjbeq.css';
import '../../css/e/easn1tbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cd0-zjbeq secondary"/><path class="easn1tbfc primary"/></g>`,
		"fallback": "iconaut:turtle-duotone",
	});
}

export default Component;
