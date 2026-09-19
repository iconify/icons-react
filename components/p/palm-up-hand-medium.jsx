import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vt9ybpbpq.css';
import '../../css/z/z7lr5q0ua.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vt9ybpbpq"/><path class="z7lr5q0ua"/></g>`,
		"fallback": "fluent-emoji-flat:palm-up-hand-medium",
	});
}

export default Component;
