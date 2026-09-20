import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnfgtsbmf.css';
import '../../css/j/j_uyn9byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bnfgtsbmf"/><path class="j_uyn9byl"/></g>`,
		"fallback": "solar:user-hands-bold",
	});
}

export default Component;
