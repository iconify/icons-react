import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb76lq53k.css';
import '../../css/f/fk4dkwbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wb76lq53k"/><path class="fk4dkwbab primary"/></g>`,
		"fallback": "iconaut:syringe-duotone",
	});
}

export default Component;
