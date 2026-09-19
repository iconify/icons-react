import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iom9tgb_k.css';
import '../../css/g/g0phw473x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iom9tgb_k"/><path class="g0phw473x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:locked-with-pen",
	});
}

export default Component;
