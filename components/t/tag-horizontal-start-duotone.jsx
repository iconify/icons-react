import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1-n5on2z.css';
import '../../css/d/djs1zgads.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q1-n5on2z"/><path class="djs1zgads"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-duotone",
	});
}

export default Component;
