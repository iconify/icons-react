import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7610ybth.css';
import '../../css/f/f5a14lz8y.css';
import '../../css/o/oufyqczij.css';
import '../../css/v/vaqayeb5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="j7610ybth"/><path class="f5a14lz8y"/><path class="oufyqczij"/><path clip-rule="evenodd" class="vaqayeb5c"/></g>`,
		"fallback": "fluent-emoji-flat:soccer-ball",
	});
}

export default Component;
