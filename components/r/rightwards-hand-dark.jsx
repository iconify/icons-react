import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il_4ysb0y.css';
import '../../css/n/n29pe8bxm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="il_4ysb0y"/><path clip-rule="evenodd" class="n29pe8bxm"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-hand-dark",
	});
}

export default Component;
