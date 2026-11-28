import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9-vhmblr.css';
import '../../css/m/m3p0phufa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9-vhmblr secondary"/><path class="m3p0phufa primary"/></g>`,
		"fallback": "iconaut:settings-duotone",
	});
}

export default Component;
