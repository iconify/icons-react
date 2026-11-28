import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c5vg_n-dl.css';
import '../../css/w/ww456_g3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c5vg_n-dl secondary"/><path class="primary ww456_g3r"/></g>`,
		"fallback": "iconaut:pennant-duotone",
	});
}

export default Component;
