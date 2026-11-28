import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imfjk3khc.css';
import '../../css/h/hktjdaccu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="imfjk3khc secondary"/><path class="hktjdaccu primary"/></g>`,
		"fallback": "iconaut:trophy-star-duotone",
	});
}

export default Component;
