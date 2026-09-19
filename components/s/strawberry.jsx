import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vobjtx-yk.css';
import '../../css/f/ftydvcc7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vobjtx-yk"/><path class="ftydvcc7r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:strawberry",
	});
}

export default Component;
