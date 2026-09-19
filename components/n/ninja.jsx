import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6a7e1nsk.css';
import '../../css/t/tktbffb9r.css';
import '../../css/i/i7uh-4qmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6a7e1nsk"/><path class="tktbffb9r"/><path class="i7uh-4qmi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ninja",
	});
}

export default Component;
