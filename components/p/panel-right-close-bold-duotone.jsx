import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_my74bgw.css';
import '../../css/o/og6n3bioz.css';
import '../../css/r/r_3m5kb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_my74bgw"/><path class="og6n3bioz"/><path class="r_3m5kb1u"/></g>`,
		"fallback": "solar:panel-right-close-bold-duotone",
	});
}

export default Component;
