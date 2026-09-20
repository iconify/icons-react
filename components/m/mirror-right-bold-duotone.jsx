import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k4s9e7b3d.css';
import '../../css/l/lnb19rb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k4s9e7b3d"/><path clip-rule="evenodd" class="lnb19rb4f"/></g>`,
		"fallback": "solar:mirror-right-bold-duotone",
	});
}

export default Component;
