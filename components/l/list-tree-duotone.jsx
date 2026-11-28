import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3q2fyckc.css';
import '../../css/w/wzzfk86ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g3q2fyckc secondary"/><path class="primary wzzfk86ut"/></g>`,
		"fallback": "iconaut:list-tree-duotone",
	});
}

export default Component;
