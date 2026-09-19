import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m67d1bslg.css';
import '../../css/q/qrh9bcbol.css';
import '../../css/r/rym_lvhsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m67d1bslg"/><path class="qrh9bcbol"/><path class="rym_lvhsr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:student",
	});
}

export default Component;
