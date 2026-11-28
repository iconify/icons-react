import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1delobqz.css';
import '../../css/v/v0pgu_brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1delobqz secondary"/><path class="primary v0pgu_brc"/></g>`,
		"fallback": "iconaut:tornado-duotone",
	});
}

export default Component;
