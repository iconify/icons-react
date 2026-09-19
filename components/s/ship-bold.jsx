import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2kjavbth.css';
import '../../css/i/io6858akw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2kjavbth"/><path class="io6858akw"/></g>`,
		"fallback": "glyphs:ship-bold",
	});
}

export default Component;
