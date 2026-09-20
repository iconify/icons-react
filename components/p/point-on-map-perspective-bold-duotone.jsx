import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ckm4b1x8o.css';
import '../../css/y/y1ionlbid.css';
import '../../css/m/m-g3ie7bv.css';
import '../../css/a/aak1lpbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ckm4b1x8o"/><path class="y1ionlbid"/><path class="m-g3ie7bv"/><path class="aak1lpbyj"/></g>`,
		"fallback": "solar:point-on-map-perspective-bold-duotone",
	});
}

export default Component;
