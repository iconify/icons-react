import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2san0b-x.css';
import '../../css/c/csi2ejt5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b2san0b-x"/><path class="csi2ejt5y"/></g>`,
		"fallback": "heroicons:rocket-launch-solid",
	});
}

export default Component;
