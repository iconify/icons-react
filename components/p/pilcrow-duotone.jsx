import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynl25473b.css';
import '../../css/f/fgugs9bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ynl25473b"/><path class="fgugs9bja primary"/></g>`,
		"fallback": "iconaut:pilcrow-duotone",
	});
}

export default Component;
