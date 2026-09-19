import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncrutqvut.css';
import '../../css/t/t_k-lekam.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ncrutqvut"/><path class="t_k-lekam"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sport-utility-vehicle",
	});
}

export default Component;
