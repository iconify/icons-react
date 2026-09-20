import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgwy6m0ea.css';
import '../../css/t/tkc2vlb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tgwy6m0ea"/><path class="tkc2vlb5b"/></g>`,
		"fallback": "solar:map-arrow-up-bold-duotone",
	});
}

export default Component;
