import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkdkhr53o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/t-oeigerl.css';
import '../../css/k/khxz2ebum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dkdkhr53o"/><g class="mc2zb0bvp"><path class="t-oeigerl"/><path class="khxz2ebum"/></g></g>`,
		"fallback": "solar:music-note-bold-duotone",
	});
}

export default Component;
