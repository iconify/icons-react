import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpzepbxoc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zbke2mcmt.css';
import '../../css/o/oj410s8yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qpzepbxoc"/><g class="mc2zb0bvp"><path class="zbke2mcmt"/><path class="oj410s8yw"/></g></g>`,
		"fallback": "solar:sleeping-bold-duotone",
	});
}

export default Component;
