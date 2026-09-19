import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8d9fabdg.css';
import '../../css/l/l5hrumb6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h8d9fabdg"/><path class="l5hrumb6n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:vertical-traffic-light",
	});
}

export default Component;
