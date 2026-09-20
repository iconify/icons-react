import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p38vymb9k.css';
import '../../css/j/jgvqpvyml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p38vymb9k"/><path clip-rule="evenodd" class="jgvqpvyml"/></g>`,
		"fallback": "reicon:layers-2-filled",
	});
}

export default Component;
