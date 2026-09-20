import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx60qsbmw.css';
import '../../css/k/kao-9pbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dx60qsbmw"/><path class="kao-9pbfm"/></g>`,
		"fallback": "mynaui:search-dot-solid",
	});
}

export default Component;
