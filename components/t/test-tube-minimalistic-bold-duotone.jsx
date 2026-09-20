import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx06mcbrw.css';
import '../../css/u/unkgs_bxd.css';
import '../../css/y/ykd7i77fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dx06mcbrw"/><path class="unkgs_bxd"/><path class="ykd7i77fc"/></g>`,
		"fallback": "solar:test-tube-minimalistic-bold-duotone",
	});
}

export default Component;
