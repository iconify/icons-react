import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a3ugl8b2u.css';
import '../../css/m/m0f3z_bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a3ugl8b2u"/><path class="m0f3z_bzo"/></g>`,
		"fallback": "reicon:search3-filled",
	});
}

export default Component;
