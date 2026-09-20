import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-56-xbut.css';
import '../../css/f/f7jsn62zn.css';
import '../../css/n/n_cnkj-8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-56-xbut"/><path class="f7jsn62zn"/><path class="n_cnkj-8s"/></g>`,
		"fallback": "pixelarticons:scale",
	});
}

export default Component;
