import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayoxdyb-f.css';
import '../../css/e/ema3ful7z.css';
import '../../css/b/b2-ai3t4q.css';
import '../../css/l/luj93bcjw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayoxdyb-f"/><path class="ema3ful7z"/><rect transform="matrix(1 0 0 -1 37 64)" class="b2-ai3t4q"/><rect transform="matrix(1 0 0 -1 37 40)" class="luj93bcjw"/></g>`,
		"fallback": "glyphs:sort-size-up-1-bold",
	});
}

export default Component;
