import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qypfnnb8z.css';
import '../../css/n/nnyl0g1rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qypfnnb8z"/><path clip-rule="evenodd" class="nnyl0g1rm"/></g>`,
		"fallback": "griddy-icons:sheep",
	});
}

export default Component;
