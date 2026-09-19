import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt50oi7lt.css';
import '../../css/k/kmdeqz87h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bt50oi7lt"/><path clip-rule="evenodd" class="kmdeqz87h"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-hand-medium-dark",
	});
}

export default Component;
