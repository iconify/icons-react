import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fp-fc0gms.css';
import '../../css/y/y7n9d1bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fp-fc0gms"/><path class="y7n9d1bkg"/></g>`,
		"fallback": "reicon:paint-roller-filled",
	});
}

export default Component;
