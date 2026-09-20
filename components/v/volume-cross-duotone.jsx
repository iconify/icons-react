import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hbl0kfy-y.css';
import '../../css/x/xs1sb7acw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hbl0kfy-y"/><path class="xs1sb7acw"/></g>`,
		"fallback": "reicon:volume-cross-duotone",
	});
}

export default Component;
