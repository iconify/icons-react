import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd8xy3wxy.css';
import '../../css/i/ik-3s9p4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cd8xy3wxy"/><path class="ik-3s9p4w"/></g>`,
		"fallback": "streamline-flex-color:pine-tree",
	});
}

export default Component;
