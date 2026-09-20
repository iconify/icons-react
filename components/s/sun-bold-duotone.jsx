import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vegvyb1ry.css';
import '../../css/g/g9yifvbez.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e4mg6r9ux.css';
import '../../css/u/uruviucrz.css';
import '../../css/f/frjdg47cc.css';
import '../../css/w/wj40jtbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vegvyb1ry"/><path clip-rule="evenodd" class="g9yifvbez"/><g class="mc2zb0bvp"><path class="e4mg6r9ux"/><path class="uruviucrz"/><path class="frjdg47cc"/><path class="wj40jtbxa"/></g></g>`,
		"fallback": "solar:sun-bold-duotone",
	});
}

export default Component;
