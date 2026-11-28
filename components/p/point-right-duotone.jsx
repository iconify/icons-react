import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gi2-jhgcz.css';
import '../../css/n/ngwih-e6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gi2-jhgcz secondary"/><path class="ngwih-e6o primary"/></g>`,
		"fallback": "iconaut:point-right-duotone",
	});
}

export default Component;
