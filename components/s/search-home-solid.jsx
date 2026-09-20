import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqdvf3b3w.css';
import '../../css/i/isshgskzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hqdvf3b3w"/><path class="isshgskzg"/></g>`,
		"fallback": "mynaui:search-home-solid",
	});
}

export default Component;
