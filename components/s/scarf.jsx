import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8qqifzyk.css';
import '../../css/h/h3jxgubxr.css';
import '../../css/u/um6bqtbcq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8qqifzyk"/><path class="h3jxgubxr"/><path class="um6bqtbcq"/></g>`,
		"fallback": "fluent-emoji-flat:scarf",
	});
}

export default Component;
