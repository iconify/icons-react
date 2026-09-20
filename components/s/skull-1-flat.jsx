import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6tl2ub6h.css';
import '../../css/y/yl2p99i4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6tl2ub6h"/><path class="yl2p99i4d"/></g>`,
		"fallback": "streamline-color:skull-1-flat",
	});
}

export default Component;
