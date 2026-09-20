import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/k/k0_umwb5e.css';
import '../../css/l/l-8vcccud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf82r5bjl"/><path class="k0_umwb5e"/><path clip-rule="evenodd" class="l-8vcccud"/></g>`,
		"fallback": "reicon:search-minus-duotone",
	});
}

export default Component;
