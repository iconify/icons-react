import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz0ujqbim.css';
import '../../css/i/iousmcqcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yz0ujqbim"/><path clip-rule="evenodd" class="iousmcqcn"/></g>`,
		"fallback": "solar:minimalistic-magnifier-close-bold",
	});
}

export default Component;
