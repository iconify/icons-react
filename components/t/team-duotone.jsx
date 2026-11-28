import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n5lj14bgl.css';
import '../../css/c/c-5v4rt0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n5lj14bgl secondary"/><path class="c-5v4rt0m primary"/></g>`,
		"fallback": "iconaut:team-duotone",
	});
}

export default Component;
