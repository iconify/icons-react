import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/n/nceokubug.css';
import '../../css/p/pro-ikbpl.css';
import '../../css/a/a6u3km0ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="nceokubug"/><path class="pro-ikbpl"/><path class="a6u3km0ls"/></g>`,
		"fallback": "iconamoon:synchronize-bold",
	});
}

export default Component;
