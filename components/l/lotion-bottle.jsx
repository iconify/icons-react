import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjseyf3om.css';
import '../../css/o/oq1i0rb6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xjseyf3om"/><path class="oq1i0rb6n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:lotion-bottle",
	});
}

export default Component;
