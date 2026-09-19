import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_6_onqec.css';
import '../../css/z/zxlqvpvwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_6_onqec"/><path class="zxlqvpvwv"/></g>`,
		"fallback": "fluent-emoji-flat:raised-back-of-hand-dark",
	});
}

export default Component;
