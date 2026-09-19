import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5q-8ibhq.css';
import '../../css/q/qmu25acmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x5q-8ibhq"/><path class="qmu25acmi"/></g>`,
		"fallback": "fluent-emoji-flat:radio-button",
	});
}

export default Component;
