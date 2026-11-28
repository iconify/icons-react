import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/usgrs4b0m.css';
import '../../css/m/mwxt-sbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary usgrs4b0m"/><path class="mwxt-sbrm primary"/></g>`,
		"fallback": "iconaut:square-pen-duotone",
	});
}

export default Component;
