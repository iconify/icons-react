import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf92libsa.css';
import '../../css/c/ckf7ygb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf92libsa"/><path class="ckf7ygb1b"/></g>`,
		"fallback": "reicon:pin-remove-duotone",
	});
}

export default Component;
