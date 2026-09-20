import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c06_jeb3r.css';
import '../../css/n/nf_x-2bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c06_jeb3r"/><path class="nf_x-2bcj"/></g>`,
		"fallback": "solar:podcast-bold",
	});
}

export default Component;
