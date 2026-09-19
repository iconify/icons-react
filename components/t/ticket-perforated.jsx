import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/poo28ib0w.css';
import '../../css/w/woim4dsal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="poo28ib0w"/><path class="woim4dsal"/></g>`,
		"fallback": "bi:ticket-perforated",
	});
}

export default Component;
