import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zn9_izbeb.css';
import '../../css/j/j40zz1bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zn9_izbeb"/><path clip-rule="evenodd" class="j40zz1bke"/></g>`,
		"fallback": "reicon:panorama-filled",
	});
}

export default Component;
