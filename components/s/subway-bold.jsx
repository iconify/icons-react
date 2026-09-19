import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfw7pnbmz.css';
import '../../css/b/b106nf4lf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wfw7pnbmz"/><path class="b106nf4lf"/></g>`,
		"fallback": "glyphs:subway-bold",
	});
}

export default Component;
