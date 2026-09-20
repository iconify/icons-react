import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vyy0u7bno.css';
import '../../css/p/p8b50-exz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vyy0u7bno"/><path class="p8b50-exz"/></g>`,
		"fallback": "keyline-icons:send-duotone",
	});
}

export default Component;
