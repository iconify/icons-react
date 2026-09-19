import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/helllprlg.css';
import '../../css/s/sko53h2-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="helllprlg"/><path class="sko53h2-u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mouse-face",
	});
}

export default Component;
