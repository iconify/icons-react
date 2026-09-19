import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8hy8ibno.css';
import '../../css/n/n1o2vwmcf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8hy8ibno"/><path class="n1o2vwmcf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:taxi",
	});
}

export default Component;
