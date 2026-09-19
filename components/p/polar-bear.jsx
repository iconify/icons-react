import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ne2ohjbtv.css';
import '../../css/t/tb25r3blk.css';
import '../../css/g/g7z6zobjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ne2ohjbtv"/><path class="tb25r3blk"/><path class="g7z6zobjr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:polar-bear",
	});
}

export default Component;
