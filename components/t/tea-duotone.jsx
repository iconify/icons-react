import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roju0hbso.css';
import '../../css/c/ctih48b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="roju0hbso secondary"/><path class="ctih48b5e primary"/></g>`,
		"fallback": "iconaut:tea-duotone",
	});
}

export default Component;
