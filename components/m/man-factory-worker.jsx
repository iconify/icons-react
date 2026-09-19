import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-r07ybor.css';
import '../../css/e/es3nxrjhb.css';
import '../../css/k/kxymku63g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s-r07ybor"/><path class="es3nxrjhb"/><path class="kxymku63g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-factory-worker",
	});
}

export default Component;
