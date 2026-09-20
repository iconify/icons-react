import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf92libsa.css';
import '../../css/y/y4vqf8ilh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf92libsa"/><path class="y4vqf8ilh"/></g>`,
		"fallback": "reicon:pin-star-duotone",
	});
}

export default Component;
