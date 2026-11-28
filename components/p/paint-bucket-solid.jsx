import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjr8n4b1r.css';
import '../../css/c/cp1oju0po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fjr8n4b1r"/><path class="cp1oju0po"/></g>`,
		"fallback": "iconaut:paint-bucket-solid",
	});
}

export default Component;
