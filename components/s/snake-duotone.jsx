import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/il6cogbhc.css';
import '../../css/d/doup4u1rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="il6cogbhc secondary"/><path class="doup4u1rl primary"/></g>`,
		"fallback": "iconaut:snake-duotone",
	});
}

export default Component;
