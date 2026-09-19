import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6-iq1b3w.css';
import '../../css/z/zf8j9abed.css';
import '../../css/p/p391oe76j.css';
import '../../css/k/kozy9j0yb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6-iq1b3w"/><path class="zf8j9abed"/><path class="p391oe76j"/><path class="kozy9j0yb"/></g>`,
		"fallback": "fluent-emoji-flat:mechanical-arm",
	});
}

export default Component;
