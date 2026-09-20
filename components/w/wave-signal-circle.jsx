import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/w/wzw7k-iny.css';
import '../../css/a/ak9-x6boj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="wzw7k-iny"/><path class="ak9-x6boj"/></g>`,
		"fallback": "streamline-flex-color:wave-signal-circle",
	});
}

export default Component;
