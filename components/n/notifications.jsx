import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/by9bu68yi.css';
import '../../css/b/bis0mtb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="by9bu68yi"/><path class="bis0mtb_h"/></g>`,
		"fallback": "gg:notifications",
	});
}

export default Component;
