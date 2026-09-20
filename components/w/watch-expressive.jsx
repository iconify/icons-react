import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sriywhbqy.css';
import '../../css/k/ka2bqebxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sriywhbqy"/><path clip-rule="evenodd" class="ka2bqebxo"/></g>`,
		"fallback": "nrk:watch-expressive",
	});
}

export default Component;
