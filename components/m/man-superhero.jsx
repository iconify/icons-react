import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsl22jwga.css';
import '../../css/z/zo0rqpb0w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jsl22jwga"/><path class="zo0rqpb0w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-superhero",
	});
}

export default Component;
