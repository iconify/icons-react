import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq5b_xz-a.css';
import '../../css/l/l786eyrol.css';
import '../../css/f/fw0as8zpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uq5b_xz-a"/><path class="l786eyrol"/><path class="fw0as8zpk"/></g>`,
		"fallback": "solar:layout-freeform-bold-duotone",
	});
}

export default Component;
