import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbideq0ed.css';
import '../../css/q/qvjy2jbrf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nbideq0ed"/><path class="qvjy2jbrf"/></g>`,
		"fallback": "streamline-color:paintbrush-2-flat",
	});
}

export default Component;
