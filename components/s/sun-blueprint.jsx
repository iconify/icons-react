import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p6vy9kb5f.css';
import '../../css/f/feovcib_o.css';
import '../../css/z/z0temacgj.css';
import '../../css/k/kwzkbjbps.css';
import '../../css/z/zs295v-ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p6vy9kb5f wm-deco"/><path class="feovcib_o wm-deco"/><path class="wm-deco z0temacgj"/><path class="kwzkbjbps wm-k"/><path class="wm-a zs295v-ni"/></g>`,
		"fallback": "withicons:sun-blueprint",
	});
}

export default Component;
