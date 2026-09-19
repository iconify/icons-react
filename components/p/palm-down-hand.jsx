import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heolumbxr.css';
import '../../css/m/m072vdbxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="heolumbxr"/><path class="m072vdbxh"/></g>`,
		"fallback": "fluent-emoji-flat:palm-down-hand",
	});
}

export default Component;
