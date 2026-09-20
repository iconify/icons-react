import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyqk6dbpw.css';
import '../../css/c/c-jivptzw.css';
import '../../css/v/vgvnd_kez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyqk6dbpw"/><path class="c-jivptzw"/><path class="vgvnd_kez"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-bold",
	});
}

export default Component;
