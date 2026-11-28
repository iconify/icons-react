import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kuvxb8bwl.css';
import '../../css/k/knmb-_bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kuvxb8bwl secondary"/><path class="knmb-_bob primary"/></g>`,
		"fallback": "iconaut:joystick-duotone",
	});
}

export default Component;
