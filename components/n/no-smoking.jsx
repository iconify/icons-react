import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp8szwpsn.css';
import '../../css/l/lromuubgp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp8szwpsn"/><path class="lromuubgp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:no-smoking",
	});
}

export default Component;
