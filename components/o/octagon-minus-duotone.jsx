import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l38825beo.css';
import '../../css/a/a4swcsuiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l38825beo secondary"/><path class="a4swcsuiv primary"/></g>`,
		"fallback": "iconaut:octagon-minus-duotone",
	});
}

export default Component;
