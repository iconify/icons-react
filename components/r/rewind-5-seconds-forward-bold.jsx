import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpbwpqkog.css';
import '../../css/f/fs2g3tb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vpbwpqkog"/><path class="fs2g3tb_y"/></g>`,
		"fallback": "solar:rewind-5-seconds-forward-bold",
	});
}

export default Component;
