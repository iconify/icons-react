import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3tznumbi.css';
import '../../css/a/aed6l6n9v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v3tznumbi"/><path clip-rule="evenodd" class="aed6l6n9v"/></g>`,
		"fallback": "glyphs:toolbox-bold",
	});
}

export default Component;
