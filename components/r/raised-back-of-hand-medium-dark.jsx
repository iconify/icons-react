import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8-018-zj.css';
import '../../css/v/vusgyacxs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f8-018-zj"/><path class="vusgyacxs"/></g>`,
		"fallback": "fluent-emoji-flat:raised-back-of-hand-medium-dark",
	});
}

export default Component;
