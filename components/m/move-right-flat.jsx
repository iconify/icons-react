import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqs32yb4a.css';
import '../../css/i/i6j26-glh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqs32yb4a"/><path clip-rule="evenodd" class="i6j26-glh"/></g>`,
		"fallback": "streamline-color:move-right-flat",
	});
}

export default Component;
