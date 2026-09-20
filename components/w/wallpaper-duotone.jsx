import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbe48rbef.css';
import '../../css/w/w0etijb9w.css';
import '../../css/j/j_js342kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nbe48rbef"/><path clip-rule="evenodd" class="w0etijb9w"/><path class="j_js342kv"/></g>`,
		"fallback": "reicon:wallpaper-duotone",
	});
}

export default Component;
