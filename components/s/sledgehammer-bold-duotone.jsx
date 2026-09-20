import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0q0n-unl.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xhtmzff9z.css';
import '../../css/v/v2j-f2pit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0q0n-unl"/><g class="mc2zb0bvp"><path class="xhtmzff9z"/><path class="v2j-f2pit"/></g></g>`,
		"fallback": "solar:sledgehammer-bold-duotone",
	});
}

export default Component;
