import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xarce8b0s.css';
import '../../css/q/qf8relbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xarce8b0s"/><path class="primary qf8relbvs"/></g>`,
		"fallback": "iconaut:robot-duotone",
	});
}

export default Component;
