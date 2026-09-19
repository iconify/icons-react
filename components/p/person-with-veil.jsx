import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bu46aabrq.css';
import '../../css/l/l56jruo8z.css';
import '../../css/o/oz2x3ph5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bu46aabrq"/><path class="l56jruo8z"/><path class="oz2x3ph5r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-with-veil",
	});
}

export default Component;
