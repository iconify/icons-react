import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aoolbj7ui.css';
import '../../css/n/nczkynbfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aoolbj7ui"/><path clip-rule="evenodd" class="nczkynbfz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mens-room",
	});
}

export default Component;
