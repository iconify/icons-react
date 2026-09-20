import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnne80bex.css';
import '../../css/v/vgl2ij04d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gnne80bex"/><path class="vgl2ij04d"/></g>`,
		"fallback": "reicon:notes-duotone",
	});
}

export default Component;
