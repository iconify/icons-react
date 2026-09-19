import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exmxlibzd.css';
import '../../css/s/s9lxz6pvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="exmxlibzd"/><path class="s9lxz6pvm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:magnifying-glass-tilted-left",
	});
}

export default Component;
