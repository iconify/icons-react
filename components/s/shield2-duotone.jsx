import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/buiyevoec.css';
import '../../css/l/luqzqrbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="buiyevoec"/><path class="luqzqrbwh"/></g>`,
		"fallback": "reicon:shield2-duotone",
	});
}

export default Component;
