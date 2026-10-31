import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-ti2fbpl.css';
import '../../css/x/xn9cozqeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-ti2fbpl"/><path class="xn9cozqeu"/></g>`,
		"fallback": "coolicons:snowflake-bulk-round",
	});
}

export default Component;
