import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8wi8ubgs.css';
import '../../css/q/qn7xjnnqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8wi8ubgs secondary"/><path class="primary qn7xjnnqw"/></g>`,
		"fallback": "iconaut:serial-port-duotone",
	});
}

export default Component;
