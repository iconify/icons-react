import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf92libsa.css';
import '../../css/t/tb5x06brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf92libsa"/><path clip-rule="evenodd" class="tb5x06brr"/></g>`,
		"fallback": "reicon:pin-search-duotone",
	});
}

export default Component;
