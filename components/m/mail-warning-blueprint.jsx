import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/byi6xc6gs.css';
import '../../css/s/sudl8tb4i.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/m/mebxeyt4k.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/q/qzc_kdb0n.css';
import '../../css/o/oao2m3bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="byi6xc6gs wm-deco"/><path class="sudl8tb4i wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="mebxeyt4k wm-k"/><path class="wm-a wqb-0n4qk"/><path class="qzc_kdb0n wm-s"/><path class="oao2m3bzy wm-k"/></g>`,
		"fallback": "withicons:mail-warning-blueprint",
	});
}

export default Component;
