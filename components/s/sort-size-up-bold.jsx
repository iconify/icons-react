import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayoxdyb-f.css';
import '../../css/e/ema3ful7z.css';
import '../../css/h/ho6qf8bec.css';
import '../../css/h/h_5qr0bya.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayoxdyb-f"/><path class="ema3ful7z"/><rect class="ho6qf8bec"/><rect class="h_5qr0bya"/></g>`,
		"fallback": "glyphs:sort-size-up-bold",
	});
}

export default Component;
