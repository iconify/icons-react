import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qa8tockca.css';
import '../../css/c/c9_8f5bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qa8tockca"/><path clip-rule="evenodd" class="c9_8f5bho"/></g>`,
		"fallback": "reicon:stretching-filled",
	});
}

export default Component;
