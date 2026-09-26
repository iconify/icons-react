import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_16ebcse.css';
import '../../css/w/w7q_frbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f_16ebcse"/><path clip-rule="evenodd" class="w7q_frbni"/></g>`,
		"fallback": "solar:panel-bottom-close-outline",
	});
}

export default Component;
