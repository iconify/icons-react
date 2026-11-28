import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dmoeeltyp.css';
import '../../css/h/hczrj3awf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dmoeeltyp secondary"/><path class="hczrj3awf primary"/></g>`,
		"fallback": "iconaut:letter-text-duotone",
	});
}

export default Component;
