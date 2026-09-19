import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-6e-_5sn.css';
import '../../css/r/rqd7dsn3i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-6e-_5sn"/><path class="rqd7dsn3i"/></g>`,
		"fallback": "glyphs:share-bold",
	});
}

export default Component;
