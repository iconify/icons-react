import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aviw0rj5z.css';
import '../../css/x/xcf7_4b7u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aviw0rj5z"/><path class="xcf7_4b7u"/></g>`,
		"fallback": "glyphs:send-bold",
	});
}

export default Component;
