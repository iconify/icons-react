import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/db9oi35bt.css';
import '../../css/u/ul60bd9vy.css';
import '../../css/m/mb8si40xz.css';
import '../../css/h/h5q3i4bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="db9oi35bt wm-deco"/><path class="ul60bd9vy wm-k"/><path class="mb8si40xz wm-a"/><path class="h5q3i4bpp wm-a"/></g>`,
		"fallback": "withicons:turtle-blueprint",
	});
}

export default Component;
