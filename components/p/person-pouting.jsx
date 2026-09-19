import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9ykh0zwy.css';
import '../../css/k/kmybmtbiu.css';
import '../../css/u/u5mgnyb-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f9ykh0zwy"/><path class="kmybmtbiu"/><path class="u5mgnyb-p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-pouting",
	});
}

export default Component;
