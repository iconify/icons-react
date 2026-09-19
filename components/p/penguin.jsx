import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6vv4yb6l.css';
import '../../css/w/w0m1pxb-u.css';
import '../../css/c/cimrciz-d.css';
import '../../css/y/y6ia5_idg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6vv4yb6l"/><path class="w0m1pxb-u"/><path class="cimrciz-d"/><path class="y6ia5_idg"/></g>`,
		"fallback": "fluent-emoji-flat:penguin",
	});
}

export default Component;
