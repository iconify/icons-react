import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vew7w9b_r.css';
import '../../css/a/ah_vasb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vew7w9b_r"/><path class="ah_vasb0t primary"/></g>`,
		"fallback": "iconaut:parachute-duotone",
	});
}

export default Component;
