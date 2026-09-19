import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz2264bjo.css';
import '../../css/z/z0r8e7r1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz2264bjo"/><path class="z0r8e7r1l"/></g>`,
		"fallback": "fluent-emoji-flat:left-facing-fist-medium-dark",
	});
}

export default Component;
