import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqbk2zb1u.css';
import '../../css/m/mdy8ndvak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iqbk2zb1u secondary"/><path class="mdy8ndvak primary"/></g>`,
		"fallback": "iconaut:sort-duotone",
	});
}

export default Component;
