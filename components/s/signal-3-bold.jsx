import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m538r4b7e.css';
import '../../css/u/ufwcm3b5r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m538r4b7e"/><path class="ufwcm3b5r"/></g>`,
		"fallback": "glyphs:signal-3-bold",
	});
}

export default Component;
