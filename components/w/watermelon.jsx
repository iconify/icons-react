import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yahv3xuxw.css';
import '../../css/w/w9edzibna.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yahv3xuxw"/><path class="w9edzibna"/></g>`,
		"fallback": "fluent-emoji-high-contrast:watermelon",
	});
}

export default Component;
