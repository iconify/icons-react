import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h13m7-bvm.css';
import '../../css/j/j40om5v5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h13m7-bvm"/><path class="j40om5v5i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:link",
	});
}

export default Component;
