import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxrmji1th.css';
import '../../css/h/h-tcvv5xi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zxrmji1th"/><path class="h-tcvv5xi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tram",
	});
}

export default Component;
