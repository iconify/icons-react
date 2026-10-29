import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a6sztlqbs.css';
import '../../css/z/zkzz2bx5y.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/w/w-lwaj9cw.css';
import '../../css/f/frhmwlb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="a6sztlqbs wm-deco"/><path class="wm-deco zkzz2bx5y"/><path class="o7-ag87sb wm-deco"/><path class="w-lwaj9cw wm-k"/><path class="frhmwlb7n wm-a"/></g>`,
		"fallback": "withicons:mushroom-blueprint",
	});
}

export default Component;
