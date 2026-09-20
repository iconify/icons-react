import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vudmqccav.css';
import '../../css/v/v2usov0du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vudmqccav"/><path class="v2usov0du"/></g>`,
		"fallback": "reicon:vault-filled",
	});
}

export default Component;
