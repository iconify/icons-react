import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/y/yz0ujqbim.css';
import '../../css/t/tu8a1hb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="r0xhknb7f"/><path class="yz0ujqbim"/><path class="tu8a1hb1x"/></g>`,
		"fallback": "solar:minimalistic-magnifier-zoom-out-bold-duotone",
	});
}

export default Component;
