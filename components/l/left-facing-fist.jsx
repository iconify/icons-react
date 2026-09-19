import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apjkb0boh.css';
import '../../css/x/x9i9d1bpz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="apjkb0boh"/><path class="x9i9d1bpz"/></g>`,
		"fallback": "fluent-emoji-flat:left-facing-fist",
	});
}

export default Component;
