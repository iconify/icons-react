import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lploadczj.css';
import '../../css/a/a51jcx83d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lploadczj secondary"/><path class="a51jcx83d primary"/></g>`,
		"fallback": "iconaut:rocket-duotone",
	});
}

export default Component;
