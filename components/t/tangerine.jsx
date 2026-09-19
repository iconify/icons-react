import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q3xnmptoy.css';
import '../../css/s/s0hsewb8t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q3xnmptoy"/><path class="s0hsewb8t"/></g>`,
		"fallback": "fluent-emoji-flat:tangerine",
	});
}

export default Component;
