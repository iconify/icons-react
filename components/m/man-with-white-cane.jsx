import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/me4q-ebmf.css';
import '../../css/q/qzizn-7aq.css';
import '../../css/m/mwfsecbre.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="me4q-ebmf"/><path class="qzizn-7aq"/><path class="mwfsecbre"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-with-white-cane",
	});
}

export default Component;
