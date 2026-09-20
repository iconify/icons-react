import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/awyb93bei.css';
import '../../css/u/uu_chybng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="awyb93bei"/><path clip-rule="evenodd" class="uu_chybng"/></g>`,
		"fallback": "reicon:lightbulb-filled",
	});
}

export default Component;
