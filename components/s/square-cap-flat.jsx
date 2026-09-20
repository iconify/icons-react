import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhyahrbhr.css';
import '../../css/z/zh1f6hv8z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qhyahrbhr"/><path clip-rule="evenodd" class="zh1f6hv8z"/></g>`,
		"fallback": "streamline-color:square-cap-flat",
	});
}

export default Component;
