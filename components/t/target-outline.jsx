import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0m0lrvdw.css';
import '../../css/k/km1g4bcrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c0m0lrvdw"/><path clip-rule="evenodd" class="km1g4bcrl"/></g>`,
		"fallback": "solar:target-outline",
	});
}

export default Component;
