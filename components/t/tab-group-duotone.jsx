import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1ar7fbxc.css';
import '../../css/q/qfkrmlbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1ar7fbxc secondary"/><path class="primary qfkrmlbod"/></g>`,
		"fallback": "iconaut:tab-group-duotone",
	});
}

export default Component;
