import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7nelgbyf.css';
import '../../css/u/u812qhfzq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7nelgbyf"/><path class="u812qhfzq"/></g>`,
		"fallback": "fluent-emoji-flat:raised-hand-light",
	});
}

export default Component;
