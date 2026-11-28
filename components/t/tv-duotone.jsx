import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p8dac4zlf.css';
import '../../css/w/wu4h98g9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p8dac4zlf secondary"/><path class="primary wu4h98g9y"/></g>`,
		"fallback": "iconaut:tv-duotone",
	});
}

export default Component;
