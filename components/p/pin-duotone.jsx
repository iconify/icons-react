import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfr2o7e7b.css';
import '../../css/j/j-0_auyhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mfr2o7e7b secondary"/><path class="j-0_auyhh primary"/></g>`,
		"fallback": "iconaut:pin-duotone",
	});
}

export default Component;
