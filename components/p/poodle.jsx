import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g24_y1b9d.css';
import '../../css/z/zasds5p9w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g24_y1b9d"/><path clip-rule="evenodd" class="zasds5p9w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:poodle",
	});
}

export default Component;
