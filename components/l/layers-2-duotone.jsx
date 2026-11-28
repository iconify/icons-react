import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k02-f-b3v.css';
import '../../css/f/fqq3t2hpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k02-f-b3v secondary"/><path class="fqq3t2hpy primary"/></g>`,
		"fallback": "iconaut:layers-2-duotone",
	});
}

export default Component;
