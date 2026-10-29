import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sknes5mjt.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/m/mebxeyt4k.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/s/sr7nadcag.css';
import '../../css/o/oao2m3bzy.css';
import '../../css/y/ye2nncc6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sknes5mjt wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="mebxeyt4k wm-k"/><path class="wm-a wqb-0n4qk"/><path class="sr7nadcag wm-s"/><path class="oao2m3bzy wm-k"/><path class="wm-s ye2nncc6u"/></g>`,
		"fallback": "withicons:mail-x-blueprint",
	});
}

export default Component;
