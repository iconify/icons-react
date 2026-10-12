import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k83okfbmc.css';
import '../../css/u/uqkidpb9y.css';
import '../../css/q/qazk61bhi.css';
import '../../css/c/c6lx5ub6a.css';
import '../../css/u/uzmwkhbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k83okfbmc"/><path class="uqkidpb9y"/><path class="qazk61bhi"/><path class="c6lx5ub6a"/><path class="uzmwkhbts"/></g>`,
		"fallback": "lucide-extended:wallpaper-duotone",
	});
}

export default Component;
