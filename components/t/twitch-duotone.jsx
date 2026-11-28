import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozf1c6vkb.css';
import '../../css/r/rar162axp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozf1c6vkb secondary"/><path class="primary rar162axp"/></g>`,
		"fallback": "iconaut:twitch-duotone",
	});
}

export default Component;
