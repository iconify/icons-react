import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vlr2nacjl.css';
import '../../css/b/by63i8wgk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vlr2nacjl"/><path class="by63i8wgk"/></g>`,
		"fallback": "pullo:magnifying-glass-x-duotone",
	});
}

export default Component;
