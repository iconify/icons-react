import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qnoiozbas.css';
import '../../css/l/lqbglmh9l.css';
import '../../css/g/gpdgasbvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qnoiozbas"/><path class="lqbglmh9l"/><path class="gpdgasbvb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-health-worker",
	});
}

export default Component;
