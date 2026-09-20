import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz2-l41gi.css';
import '../../css/j/ju8oh_buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jz2-l41gi"/><path class="ju8oh_buo"/></g>`,
		"fallback": "reicon:lightbulb-duotone",
	});
}

export default Component;
