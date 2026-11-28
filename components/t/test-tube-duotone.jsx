import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m90680gmg.css';
import '../../css/s/smeduiqps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m90680gmg secondary"/><path class="primary smeduiqps"/></g>`,
		"fallback": "iconaut:test-tube-duotone",
	});
}

export default Component;
