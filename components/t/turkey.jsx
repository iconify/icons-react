import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuvut0bsw.css';
import '../../css/h/hj18awmly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuvut0bsw"/><path class="hj18awmly"/></g>`,
		"fallback": "fluent-emoji-high-contrast:turkey",
	});
}

export default Component;
