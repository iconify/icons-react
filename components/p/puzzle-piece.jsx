import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3-d3ra6e.css';
import '../../css/c/cfvtd0dke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x3-d3ra6e"/><path class="cfvtd0dke"/></g>`,
		"fallback": "fluent-emoji-flat:puzzle-piece",
	});
}

export default Component;
