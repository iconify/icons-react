import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yr323acer.css';
import '../../css/p/p48-3tb2n.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/w/w1dqk3y3n.css';
import '../../css/e/evtr5etup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yr323acer"/><path class="p48-3tb2n wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="w1dqk3y3n"/><path class="evtr5etup"/></g>`,
		"fallback": "withicons:user-round-blueprint",
	});
}

export default Component;
