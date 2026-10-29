import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y1etg-qvq.css';
import '../../css/e/eytbpv9nw.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/p/p-cqkx0gi.css';
import '../../css/k/ktm4s-b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y1etg-qvq"/><path class="eytbpv9nw wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="p-cqkx0gi wm-k"/><path class="ktm4s-b6m wm-a"/></g>`,
		"fallback": "withicons:tombstone-blueprint",
	});
}

export default Component;
