import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lds_jkblf.css';
import '../../css/h/h29kwbajy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lds_jkblf"/><path class="h29kwbajy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:love-hotel",
	});
}

export default Component;
