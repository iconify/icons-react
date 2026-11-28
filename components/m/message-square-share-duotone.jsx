import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1ct-fbok.css';
import '../../css/r/rv1yuzg0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z1ct-fbok"/><path class="primary rv1yuzg0e"/></g>`,
		"fallback": "iconaut:message-square-share-duotone",
	});
}

export default Component;
