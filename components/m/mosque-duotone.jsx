import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lcl13pbkp.css';
import '../../css/w/wu1tfoboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lcl13pbkp secondary"/><path class="primary wu1tfoboe"/></g>`,
		"fallback": "iconaut:mosque-duotone",
	});
}

export default Component;
