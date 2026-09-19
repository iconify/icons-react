import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jadehxbel.css';
import '../../css/y/yivj6t20i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jadehxbel"/><path clip-rule="evenodd" class="yivj6t20i"/></g>`,
		"fallback": "gg:loupe",
	});
}

export default Component;
