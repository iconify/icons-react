import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fr5f9fz8b.css';
import '../../css/w/wrw0ombml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fr5f9fz8b"/><path clip-rule="evenodd" class="wrw0ombml"/></g>`,
		"fallback": "reicon:sticker-smile-filled",
	});
}

export default Component;
