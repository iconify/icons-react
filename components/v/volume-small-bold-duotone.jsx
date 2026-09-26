import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyitw4lyb.css';
import '../../css/p/pysk7yzbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tyitw4lyb"/><path clip-rule="evenodd" class="pysk7yzbg"/></g>`,
		"fallback": "solar:volume-small-bold-duotone",
	});
}

export default Component;
