import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1x7andbr.css';
import '../../css/p/pbj_bhl4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary v1x7andbr"/><path class="pbj_bhl4m primary"/></g>`,
		"fallback": "iconaut:pill-bottle-duotone",
	});
}

export default Component;
