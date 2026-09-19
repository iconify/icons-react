import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6j5-lp5p.css';
import '../../css/j/j55500baa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6j5-lp5p"/><path clip-rule="evenodd" class="j55500baa"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-hand-light",
	});
}

export default Component;
