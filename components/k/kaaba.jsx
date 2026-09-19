import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1l1nfbop.css';
import '../../css/z/zshu-pbxi.css';
import '../../css/s/soo--9b7n.css';
import '../../css/p/p6gz69b4h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h1l1nfbop"/><path class="zshu-pbxi"/><path class="soo--9b7n"/><path class="p6gz69b4h"/></g>`,
		"fallback": "fluent-emoji-flat:kaaba",
	});
}

export default Component;
