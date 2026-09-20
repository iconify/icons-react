import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi9ppkbjo.css';
import '../../css/n/nu5nspbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wi9ppkbjo"/><path class="nu5nspbxn"/></g>`,
		"fallback": "keyline-icons:megaphone-duotone",
	});
}

export default Component;
