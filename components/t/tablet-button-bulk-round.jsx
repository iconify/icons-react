import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jnlx1ibsq.css';
import '../../css/z/zenlmhbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jnlx1ibsq"/><path class="zenlmhbbk"/></g>`,
		"fallback": "coolicons:tablet-button-bulk-round",
	});
}

export default Component;
