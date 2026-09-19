import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwl2uhb8a.css';
import '../../css/i/i9i4hv2_b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xwl2uhb8a"/><path class="i9i4hv2_b"/></g>`,
		"fallback": "glyphs:temperature-hot-bold",
	});
}

export default Component;
