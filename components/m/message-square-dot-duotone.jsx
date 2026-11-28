import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ues4d5qzd.css';
import '../../css/k/k85_8qhfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ues4d5qzd"/><path class="k85_8qhfh primary"/></g>`,
		"fallback": "iconaut:message-square-dot-duotone",
	});
}

export default Component;
