import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g178b1wlz.css';
import '../../css/l/ld5zuhbyx.css';
import '../../css/s/sej-8-beb.css';
import '../../css/m/ma220ub_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g178b1wlz"/><path clip-rule="evenodd" class="ld5zuhbyx"/><path class="sej-8-beb"/><path class="ma220ub_p"/></g>`,
		"fallback": "pepicons:scissors-print",
	});
}

export default Component;
