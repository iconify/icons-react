import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htdgk3bkf.css';
import '../../css/z/zszqql2bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="htdgk3bkf"/><path clip-rule="evenodd" class="zszqql2bz"/></g>`,
		"fallback": "griddy-icons:seat-reclining-filled",
	});
}

export default Component;
