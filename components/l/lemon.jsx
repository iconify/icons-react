import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ki-8rl7oe.css';
import '../../css/h/h5r59syyb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ki-8rl7oe"/><path class="h5r59syyb"/></g>`,
		"fallback": "fluent-emoji-flat:lemon",
	});
}

export default Component;
