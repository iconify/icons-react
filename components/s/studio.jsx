import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5l_f_bij.css';
import '../../css/p/pvgit7bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5l_f_bij"/><path clip-rule="evenodd" class="pvgit7bdv"/></g>`,
		"fallback": "gg:studio",
	});
}

export default Component;
