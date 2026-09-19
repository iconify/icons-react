import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nu3px45lp.css';
import '../../css/g/g08_agbok.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nu3px45lp"/><path class="g08_agbok"/></g>`,
		"fallback": "fluent-emoji-high-contrast:skier",
	});
}

export default Component;
