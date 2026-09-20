import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybwunob9g.css';
import '../../css/y/ypxdzxgut.css';
import '../../css/d/dkj7-l0bn.css';
import '../../css/h/hsq04hcuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ybwunob9g"/><path class="ypxdzxgut"/><path class="dkj7-l0bn"/><path class="hsq04hcuy"/></g>`,
		"fallback": "reicon:wand3-duotone",
	});
}

export default Component;
