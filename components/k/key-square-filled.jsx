import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aab3_tooc.css';
import '../../css/e/ehww-6bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aab3_tooc"/><path clip-rule="evenodd" class="ehww-6bwh"/></g>`,
		"fallback": "reicon:key-square-filled",
	});
}

export default Component;
