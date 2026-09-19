import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/d9ptkfboc.css';
import '../../css/p/pui_g7baf.css';
import '../../css/y/yeotfbbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="d9ptkfboc"/><path class="pui_g7baf"/><path class="yeotfbbou"/></g>`,
		"fallback": "iconoir:keyframes-solid",
	});
}

export default Component;
