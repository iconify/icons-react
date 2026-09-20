import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rloqbnbld.css';
import '../../css/k/ke5zq-gtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rloqbnbld"/><path class="ke5zq-gtk"/></g>`,
		"fallback": "nrk:list-xmark-expressive",
	});
}

export default Component;
