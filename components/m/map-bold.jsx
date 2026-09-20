import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/veutcqbwq.css';
import '../../css/f/f3hq_nndi.css';
import '../../css/r/rauknxboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="veutcqbwq"/><path class="f3hq_nndi"/><path class="rauknxboy"/></g>`,
		"fallback": "solar:map-bold",
	});
}

export default Component;
