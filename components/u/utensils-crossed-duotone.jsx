import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/au-hm_bte.css';
import '../../css/i/ild3-ob8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="au-hm_bte secondary"/><path class="ild3-ob8o primary"/></g>`,
		"fallback": "iconaut:utensils-crossed-duotone",
	});
}

export default Component;
