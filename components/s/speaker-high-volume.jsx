import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h90lgebck.css';
import '../../css/q/qh1gefkwh.css';
import '../../css/i/inhki6bwd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h90lgebck"/><path class="qh1gefkwh"/><path class="inhki6bwd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:speaker-high-volume",
	});
}

export default Component;
