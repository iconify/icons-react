import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jeip7fs_w.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/i/in7om8b0h.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jeip7fs_w wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="in7om8b0h wm-k"/><path class="hkcj5-bst wm-a"/></g>`,
		"fallback": "withicons:tablet-blueprint",
	});
}

export default Component;
