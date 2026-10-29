import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gc5-p1bnk.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/c/crfhsoutb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gc5-p1bnk wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="crfhsoutb wm-k"/></g>`,
		"fallback": "withicons:user-blueprint",
	});
}

export default Component;
