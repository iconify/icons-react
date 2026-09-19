import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/krmxqc3ob.css';
import '../../css/t/twuq9qb0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="krmxqc3ob"/><path class="twuq9qb0s"/></g>`,
		"fallback": "fluent-emoji-high-contrast:manual-wheelchair",
	});
}

export default Component;
