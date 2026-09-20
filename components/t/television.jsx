import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv2sj7z_t.css';
import '../../css/b/b6x92hbvb.css';
import '../../css/v/vk5wnopgr.css';
import '../../css/w/wzmvinbmn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iv2sj7z_t"/><path clip-rule="evenodd" class="b6x92hbvb"/><path class="vk5wnopgr"/><path class="wzmvinbmn"/></g>`,
		"fallback": "pepicons-print:television",
	});
}

export default Component;
