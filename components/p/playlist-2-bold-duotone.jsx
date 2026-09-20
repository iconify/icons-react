import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwjxunbwr.css';
import '../../css/x/xtush_b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwjxunbwr"/><path class="xtush_b0b"/></g>`,
		"fallback": "solar:playlist-2-bold-duotone",
	});
}

export default Component;
