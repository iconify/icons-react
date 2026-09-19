import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wn_jstb7k.css';
import '../../css/n/n75-ib15c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wn_jstb7k"/><path class="n75-ib15c"/></g>`,
		"fallback": "fluent-emoji-high-contrast:lady-beetle",
	});
}

export default Component;
