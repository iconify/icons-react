import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwjx1ac-h.css';
import '../../css/o/ob-i7wcvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nwjx1ac-h secondary"/><path class="ob-i7wcvu primary"/></g>`,
		"fallback": "iconaut:scan-image-duotone",
	});
}

export default Component;
