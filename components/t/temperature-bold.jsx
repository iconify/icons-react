import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bl7-kbc5b.css';
import '../../css/p/pkpvq603q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bl7-kbc5b"/><rect class="pkpvq603q"/></g>`,
		"fallback": "glyphs:temperature-bold",
	});
}

export default Component;
