import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h-6c3ub_h.css';
import '../../css/i/ievmwpbxo.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/m/mebxeyt4k.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/c/c3wgojkty.css';
import '../../css/o/oao2m3bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h-6c3ub_h wm-deco"/><path class="ievmwpbxo wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="mebxeyt4k wm-k"/><path class="wm-a wqb-0n4qk"/><path class="c3wgojkty wm-s"/><path class="oao2m3bzy wm-k"/></g>`,
		"fallback": "withicons:mail-plus-blueprint",
	});
}

export default Component;
