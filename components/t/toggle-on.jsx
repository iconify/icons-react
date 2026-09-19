import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs-ikybde.css';
import '../../css/f/ftb9-sauw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fs-ikybde"/><path clip-rule="evenodd" class="ftb9-sauw"/></g>`,
		"fallback": "gg:toggle-on",
	});
}

export default Component;
