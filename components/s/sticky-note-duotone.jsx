import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhzvmcbvc.css';
import '../../css/i/iep3l4bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jhzvmcbvc secondary"/><path class="iep3l4bdd primary"/></g>`,
		"fallback": "iconaut:sticky-note-duotone",
	});
}

export default Component;
