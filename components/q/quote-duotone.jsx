import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssoxi88ax.css';
import '../../css/o/offd72bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ssoxi88ax"/><path class="offd72bcs primary"/></g>`,
		"fallback": "iconaut:quote-duotone",
	});
}

export default Component;
